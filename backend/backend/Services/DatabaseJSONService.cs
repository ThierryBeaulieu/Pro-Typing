using System;
using System.Text.Json;
using backend.Schemas;
namespace backend.Services
{
    public class DatabaseJSONService : IDatabaseService
    {
        private readonly IFileService _fileService;
        private readonly string _databasePath;

        public DatabaseJSONService(IFileService fileService, string databasePath = "Database/certifications.json")
        {
            _fileService = fileService;
            _databasePath = databasePath;
        }

        public async Task<IReadOnlyList<Certification>> FetchAllCertifications()
        {
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            if (!_fileService.Exists(_databasePath))
            {
                throw new FileNotFoundException($"The database file was not found at path {_databasePath}");
            }   

            string databaseJson = await _fileService.ReadAllTextAsync(_databasePath);
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

