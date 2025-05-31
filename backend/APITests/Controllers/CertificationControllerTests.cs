namespace APITests;
using backend.Controllers;
using backend.Schemas;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;

public class CertificationControllerTests
{
    private readonly CertificationController _controller;

    public CertificationControllerTests()
    {

        Certification cert1 = new()
        {
            ID = "id1",
            Name = "name",
            Description = "description",
            Range = "range",
            ImgID = "imgID"
        };
        Certification cert2 = new()
        {
            ID = "id2",
            Name = "name",
            Description = "description",
            Range = "range",
            ImgID = "imgID"
        };
        var stubData = new List<Certification>()
        {
            cert1, cert2
        };

        var loggerMoq = new Mock<ILogger<CertificationController>>();
        var certificationMoq = new Mock<ICertificationService>();
        certificationMoq.Setup(service => service.FetchAllCertifications())
            .ReturnsAsync(stubData);
        _controller = new CertificationController(certificationMoq.Object, loggerMoq.Object);

    }

    [Fact]
    public async Task Controller_ShouldFetchAllCertifications()
    {
        // Act
        var result = await _controller.Get();

        // Assert the type is OkObjectResult (HTTP 200)
        var okResult = Assert.IsType<OkObjectResult>(result);

        // Extract the list from the result value
        var items = Assert.IsAssignableFrom<IEnumerable<Certification>>(okResult.Value);

        // Now you can verify the count or any other property
        Assert.Equal(2, items.Count());
    }

    [Fact]
    public async Task Controller_WhenErrorOccurs_ShouldReturnError404()
    {

        var loggerMoq = new Mock<ILogger<CertificationController>>();
        var certificationMoq = new Mock<ICertificationService>();
        certificationMoq.Setup(service => service.FetchAllCertifications())
            .ThrowsAsync(new Exception("Test exception"));
        var controller = new CertificationController(certificationMoq.Object, loggerMoq.Object);

        // Act
        var result = await controller.Get();

        // Assert the type is  (HTTP 500)
        var objectResult = Assert.IsType<ObjectResult>(result);

        Assert.Equal(500, objectResult.StatusCode);
    }
}
