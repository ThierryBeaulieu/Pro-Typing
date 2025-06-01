namespace APITests;
using backend.Controllers;
using backend.Schemas;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;

public class AssetControllerTests
{
    private readonly AssetController _controller;

    public AssetControllerTests()
    {
        var assetServiceMock = new Mock<IAssetService>();
        assetServiceMock.Setup(service => service.FetchAssetById(It.IsAny<string>()))
            .ReturnsAsync("");
        var logger = new Mock<ILogger<AssetController>>();
        _controller = new AssetController(assetServiceMock.Object, logger.Object);
    }

    [Fact]
    public async Task Controller_ShouldFetchAllCertifications()
    {
        // Act
        var id = "1e0c8f97-9ec2-4353-b8eb-482b2a45c9c5";
        var result = await _controller.Get(id);

        // Assert the type is OkObjectResult (HTTP 200)
        var okResult = Assert.IsType<OkObjectResult>(result);

        // Extract the list from the result value
        var items = Assert.IsAssignableFrom<IEnumerable<Certification>>(okResult.Value);

        // Now you can verify the count or any other property
        Assert.Equal(2, items.Count());
    }
}
