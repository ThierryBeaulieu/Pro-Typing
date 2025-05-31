namespace APITests;
using backend.Services;

public class CertificationServiceTests
{
    private readonly CertificationService _certificationService;

    public CertificationServiceTests()
    {
        _certificationService = new CertificationService();
    }

    [Fact]
    public void Test1()
    {
        var result = _certificationService.FetchAllCertifications();

        // todo verify that we are calling the right services
    }
}
