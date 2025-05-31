namespace APITests;
using backend.Controllers;
using backend.Schemas;
using backend.Services;
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

        var certificationMoq = new Mock<ICertificationService>();
        certificationMoq.Setup(service => service.FetchAllCertifications())
            .ReturnsAsync(stubData);
        _controller = new CertificationController(certificationMoq.Object);

    }

    [Fact]
    public async void Controller_ShouldFetchAllCertifications()
    {
        IEnumerable<Certification> items = await _controller.Get();
        Assert.NotNull(items);
        Assert.Equal(2, items.Count());
    }
}
