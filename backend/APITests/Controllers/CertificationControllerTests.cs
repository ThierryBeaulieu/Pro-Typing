namespace APITests;
using backend.Controllers;
using backend.Schemas;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text.Json;
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
        var result = await _controller.GetAllCertifications();

        // Assert the type is OkObjectResult (HTTP 200)
        var okResult = Assert.IsType<OkObjectResult>(result);

        // Extract the list from the result value
        var items = Assert.IsAssignableFrom<IEnumerable<Certification>>(okResult.Value);

        // Now you can verify the count or any other property
        Assert.Equal(2, items.Count());
    }

    [Fact]
    public async Task FetchAllCertifications_WhenEmpty_ShouldReturnError500()
    {

        var loggerMoq = new Mock<ILogger<CertificationController>>();
        var certificationMoq = new Mock<ICertificationService>();
        certificationMoq.Setup(service => service.FetchAllCertifications())
            .ThrowsAsync(new Exception("Test exception"));
        var controller = new CertificationController(certificationMoq.Object, loggerMoq.Object);

        // Act
        var result = await controller.GetAllCertifications();

        // Assert
        var objectResult = Assert.IsType<ObjectResult>(result);

        Assert.Equal(500, objectResult.StatusCode);
    }

    [Fact]
    public async Task FetchCertificationByID_WhenEmpty_ShouldReturnError404()
    {
        var loggerMoq = new Mock<ILogger<CertificationController>>();
        var certificationMoq = new Mock<ICertificationService>();
        certificationMoq.Setup(service => service.FetchCertificationById(It.IsAny<string>()))
            .ReturnsAsync((Certification)null!);
        var controller = new CertificationController(certificationMoq.Object, loggerMoq.Object);

        // Act
        var result = await controller.GetCertificationById("id");

        // Assert
        var objectResult = Assert.IsType<NotFoundObjectResult>(result);

        Assert.Equal(404, objectResult.StatusCode);
    }

    [Fact]
    public async Task FetchCertificationByID_IntegrationTest()
    {
        var fileService = new FileService();
        var databaseService = new DatabaseJSONService(fileService);
        var certificationService = new CertificationService(databaseService);


        var logger = new Mock<ILogger<CertificationController>>();
        var controller = new CertificationController(certificationService, logger.Object);

        // Act
        var testId = "d1181969-6ae4-4a2f-9bb7-4e692aa278e7";
        var result = await controller.GetCertificationById(testId);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var certification = Assert.IsType<Certification>(okResult.Value);

        Assert.Equal(testId, certification.ID);
    }

    [Fact]
    public async Task FetchCertifications_IntegrationTest()
    {
        var fileService = new FileService();
        var databaseService = new DatabaseJSONService(fileService);
        var certificationService = new CertificationService(databaseService);


        var logger = new Mock<ILogger<CertificationController>>();
        var controller = new CertificationController(certificationService, logger.Object);

        // Act
        var result = await controller.GetAllCertifications();

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var certifications = Assert.IsType<List<Certification>>(okResult.Value);

        Assert.Equal(9, certifications.Count);
    }


    [Fact]
    public async Task FetchCertificationimg_IntegrationTest()
    {
        var stubJson = @"
        [   
            {
              ""ID"": ""06cb4d77-42d7-4d9f-a515-97bf7b0d93b8"",
              ""FileName"": ""space-man.jpeg"",
              ""Base64"": """"
            }
        ]
        ";

        var fileServiceMock = new Mock<IFileService>();
        fileServiceMock.Setup(service => service.ReadAllTextAsync(It.IsAny<string>()))
            .ReturnsAsync(stubJson);

        fileServiceMock.Setup(service => service.Exists(It.IsAny<string>()))
            .Returns(true);

        byte[] stub = new byte[] { 0x01, 0xFF, 0x00, 0x7A };
        fileServiceMock.Setup(service => service.ReadAllBytesAsync(It.IsAny<string>()))
        .ReturnsAsync(stub);

        var databaseService = new DatabaseJSONService(fileServiceMock.Object);
        var certificationService = new CertificationService(databaseService);


        var logger = new Mock<ILogger<CertificationController>>();
        var controller = new CertificationController(certificationService, logger.Object);

        // Act
        var result = await controller.GetCertificationImgById("06cb4d77-42d7-4d9f-a515-97bf7b0d93b8");

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var certificationImg = Assert.IsType<CertificationImg>(okResult.Value);

        Assert.Equal("06cb4d77-42d7-4d9f-a515-97bf7b0d93b8", certificationImg.ID);
    }
}
