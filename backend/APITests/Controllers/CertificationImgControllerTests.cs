namespace APITests;

using System.Text.Json;
using backend.Controllers;
using backend.Schemas;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;

public class CertificationImgControllerTests
{
    public async Task<CertificationImg?> GetCertificationByImg()
    {
        var jsonPath = Path.Combine(AppContext.BaseDirectory, "TestData", "certificationImg.json");
        var json = await File.ReadAllTextAsync(jsonPath);
        var certificationImg = JsonSerializer.Deserialize<CertificationImg>(json, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });
        return certificationImg;
    }

    [Fact]
    public async Task Controller_ShouldFetchAllCertifications()
    {
        var database = new Mock<IDatabaseService>();
        database.Setup(service => service.FetchAssetById(It.IsAny<string>()))
            .ReturnsAsync((CertificationImg)null!);

        var service = new CertificationImgService(database.Object);
        var logger = new Mock<ILogger<CertificationImgController>>();
        var controller = new CertificationImgController(service, logger.Object);

        // Act
        var id = "1e0c8f97-9ec2-4353-b8eb-482b2a45c9c5";
        var result = await controller.Get(id);

        // Assert
        var objectResult = Assert.IsType<NotFoundObjectResult>(result);

        Assert.Equal(404, objectResult.StatusCode);

    }
}
