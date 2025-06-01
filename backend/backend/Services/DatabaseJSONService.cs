using System;
using System.Text.Json;
using backend.Schemas;
namespace backend.Services
{
    public class DatabaseJSONService : IDatabaseService
    {
        private readonly IFileService _fileService;
        private readonly string _certificationPath;
        private readonly string _certificationImgPath;

        public DatabaseJSONService(IFileService fileService)
        {
            _fileService = fileService;
            _certificationPath = "Database/certifications.json";
            _certificationImgPath = "Database/certificationImgs.json";
        }

        public async Task<IReadOnlyList<Certification>> FetchAllCertifications()
        {
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            if (!_fileService.Exists(_certificationPath))
            {
                throw new FileNotFoundException($"The database file was not found at path {_certificationPath}");
            }   

            string databaseJson = await _fileService.ReadAllTextAsync(_certificationPath);
            List<Certification>? certifications = JsonSerializer.Deserialize<List<Certification>>(databaseJson, options);

            if (certifications == null)
            {
                throw new JsonException("Failed to deserialize certifications: JSON content is invalid or empty.");
            }

            return certifications;
        }

        public async Task<Certification?> FetchCertificationById(string id)
        {
            IReadOnlyList<Certification> certifications = await FetchAllCertifications();
            var cert = certifications.FirstOrDefault(c => c.ID == id);
            return cert;
        }

        public async Task<CertificationImg?> FetchAssetById(string id)
        {
            throw new NotImplementedException("not done yet");
        }
    }
}

