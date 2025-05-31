namespace APITests;

using backend.Schemas;
using backend.Services;
using Moq;

public class CertificationServiceTests
{
    private readonly CertificationService _certificationService;

    public CertificationServiceTests()
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

        var databaseMoq = new Mock<IDatabaseService>();
        databaseMoq.Setup(service => service.FetchAllCertifications())
            .Returns(stubData);

        _certificationService = new CertificationService(databaseMoq.Object);
    }

    [Fact]
    public void FetchAllCertification_ShouldReturnAllCertifications()
    {
        var result = _certificationService.FetchAllCertifications();

        Assert.Equal(2, result.Count);
    }
}
