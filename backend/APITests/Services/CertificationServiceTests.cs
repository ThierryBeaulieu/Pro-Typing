namespace APITests;

using backend.Schemas;
using backend.Services;
using Moq;

public class CertificationServiceTests
{
    [Fact]
    public async Task FetchAllCertification_ShouldReturnAllCertifications()
    {
        // Arrange
        var databaseMoq = new Mock<IDatabaseService>();
        databaseMoq.Setup(service => service.FetchAllCertifications())
            .ReturnsAsync(new List<Certification>());

        var certificationService = new CertificationService(databaseMoq.Object);

        // Act
        var result = await certificationService.FetchAllCertifications();

        // Assert
        databaseMoq.Verify(service => service.FetchAllCertifications(), Times.Once());
        Assert.NotNull(result);
    }

    [Fact]
    public async Task FetchCertificationByID_ShouldReturnASpecificCertification()
    {
        // Arrange
        var databaseMoq = new Mock<IDatabaseService>();
        var expectedCertification = new Certification(); // create a sample certification
        databaseMoq.Setup(service => service.FetchCertificationById("id"))
            .ReturnsAsync(expectedCertification);

        var certificationService = new CertificationService(databaseMoq.Object);

        // Act
        var result = await certificationService.FetchCertificationByID("id");

        // Assert
        databaseMoq.Verify(service => service.FetchCertificationById("id"), Times.Once());
        Assert.NotNull(result);
        Assert.Equal(expectedCertification, result);
    }
}
