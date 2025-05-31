namespace APITests;
using backend.Controllers;
using backend.Schemas;

public class CertificationControllerTests
{
    private CertificationController _controller;

    public CertificationControllerTests()
    {
        _controller = new CertificationController();
    }

    [Fact]
    public void Test1()
    {
        IEnumerable<Certification> items = _controller.Get();
        Assert.NotNull(items);
        Assert.Equal(9, items.Count());
    }
}
