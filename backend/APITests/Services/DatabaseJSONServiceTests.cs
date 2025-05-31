namespace APITests;

using backend.Schemas;
using backend.Services;
using Moq;

public class DatabaseJSONServiceTests
{
    private readonly DatabaseJSONService _databaseJSONService;

    public DatabaseJSONServiceTests()
    {
        _databaseJSONService = new DatabaseJSONService();
    }

    [Fact]
    public async void FetchAllCertification_ShouldReturnAllCertifications()
    {
        var result = await _databaseJSONService.FetchAllCertifications();
        Assert.Equal(9, result.Count);
    }
}
