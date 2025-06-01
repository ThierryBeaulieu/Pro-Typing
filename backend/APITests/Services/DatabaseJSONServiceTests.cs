namespace APITests;

using System.Text.Json;
using backend.Schemas;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;

public class DatabaseJSONServiceTests
{
    private readonly string _stubJson;

    public DatabaseJSONServiceTests()
    {
        _stubJson = @"
        [
            {
            ""id"": ""d1181969-6ae4-4a2f-9bb7-4e692aa278e7"",
            ""name"": ""Average Typist"",
            ""description"": ""This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person."",
            ""range"": ""40-55 words per minute"",
            ""imgID"": ""1e0c8f97-9ec2-4353-b8eb-482b2a45c9c5""
            },
            {
            ""id"": ""11a26b4c-2795-4621-8e65-e16dfa2ff989"",
            ""name"": ""Certified Typist"",
            ""description"": ""This range includes 25-30% of people. At this level, you are faster than the majority but not yet at the professional level."",
            ""range"": ""60-75 words per minute"",
            ""imgID"": ""39db54a6-c7f6-4311-8e6a-b4879cf9f21d""
            }
        ]";
    }

    [Fact]
    public async void FetchAllCertification_ShouldReturnAllCertifications()
    {
        var fileServiceMock = new Mock<IFileService>();
        fileServiceMock.Setup(service => service.ReadAllTextAsync(It.IsAny<string>()))
            .ReturnsAsync(_stubJson);

        fileServiceMock.Setup(service => service.Exists(It.IsAny<string>()))
            .Returns(true);

        var databaseJSONService = new DatabaseJSONService(fileServiceMock.Object);

        var result = await databaseJSONService.FetchAllCertifications();

        Assert.Equal(2, result.Count);
    }

    [Fact]
    public async void FetchAllCertification_WhenDatabaseIsntFound_ShouldReturn500()
    {
        var fileServiceMock = new Mock<IFileService>();
        fileServiceMock.Setup(service => service.ReadAllTextAsync(It.IsAny<string>()))
            .ReturnsAsync(_stubJson);

        fileServiceMock.Setup(service => service.Exists(It.IsAny<string>()))
            .Returns(false);

        var databaseJSONService = new DatabaseJSONService(fileServiceMock.Object);

        var exception = await Assert.ThrowsAsync<FileNotFoundException>(() =>
            databaseJSONService.FetchAllCertifications());

        Assert.Contains("The database file was not found at path Database/certifications.json", exception.Message);
    }


    [Fact]
    public async void FetchAllCertification_WhenCorruptedDataFormat_ShouldReturn500()
    {
        var fileServiceMock = new Mock<IFileService>();
        fileServiceMock.Setup(service => service.ReadAllTextAsync(It.IsAny<string>()))
            .ReturnsAsync("||");

        fileServiceMock.Setup(service => service.Exists(It.IsAny<string>()))
            .Returns(true);

        var databaseJSONService = new DatabaseJSONService(fileServiceMock.Object);

        var exception = await Assert.ThrowsAsync<JsonException>(() =>
          databaseJSONService.FetchAllCertifications());
    }

    [Fact]
    public async void FetchAllCertification_WhenNullJSON_ShouldReturn500()
    {
        var fileServiceMock = new Mock<IFileService>();
        fileServiceMock.Setup(service => service.ReadAllTextAsync(It.IsAny<string>()))
            .ReturnsAsync("null");

        fileServiceMock.Setup(service => service.Exists(It.IsAny<string>()))
            .Returns(true);

        var databaseJSONService = new DatabaseJSONService(fileServiceMock.Object);

        var exception = await Assert.ThrowsAsync<JsonException>(() =>
          databaseJSONService.FetchAllCertifications());

        Assert.Contains("Failed to deserialize file at Database/certifications.json: JSON content is invalid or empty.", exception.Message);
    }

    [Fact]
    public async void FetchAllCertificationImgById_WhenDatabaseIsntFound_ShouldReturn500()
    {
        var fileServiceMock = new Mock<IFileService>();
        fileServiceMock.Setup(service => service.Exists(It.IsAny<string>()))
             .Returns(false);

        var databaseJSONService = new DatabaseJSONService(fileServiceMock.Object);

        var exception = await Assert.ThrowsAsync<FileNotFoundException>(() =>
            databaseJSONService.FetchCertificationImgById("imgId"));

        Assert.Contains("The database file was not found at path Database/certificationImgs.json", exception.Message);
    }

    [Fact]
    public async void FetchCertificationByImg_WhenNullJSON_ShouldReturn500()
    {
        var fileServiceMock = new Mock<IFileService>();

        fileServiceMock.Setup(service => service.Exists(It.IsAny<string>()))
          .Returns(true);

        fileServiceMock.Setup(service => service.ReadAllTextAsync(It.IsAny<string>()))
            .ReturnsAsync("null");

        var databaseJSONService = new DatabaseJSONService(fileServiceMock.Object);

        var exception = await Assert.ThrowsAsync<JsonException>(() =>
          databaseJSONService.FetchCertificationImgById("test"));

        Assert.Contains("Failed to deserialize file at Database/certificationImgs.json: JSON content is invalid or empty.", exception.Message);
    }

    [Fact]
    public async void FetchAllCertificationImgById_WhenJSONIsNull_ShouldReturn500()
    {
        var fileServiceMock = new Mock<IFileService>();
        fileServiceMock.Setup(service => service.Exists(It.IsAny<string>()))
             .Returns(true);

        fileServiceMock.Setup(service => service.ReadAllTextAsync(It.IsAny<string>()))
            .ReturnsAsync("null");

        byte[] stub = new byte[] { 0x01, 0xFF, 0x00, 0x7A };
        fileServiceMock.Setup(service => service.ReadAllBytesAsync(It.IsAny<string>()))
        .ReturnsAsync(stub);

        var databaseJSONService = new DatabaseJSONService(fileServiceMock.Object);

        var exception = await Assert.ThrowsAsync<JsonException>(() =>
          databaseJSONService.FetchCertificationImgById("test"));

        Assert.Contains("Failed to deserialize file at Database/certificationImgs.json: JSON content is invalid or empty.", exception.Message);
    }

}