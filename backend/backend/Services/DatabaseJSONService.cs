using System;
using System.Collections.Generic;
using System.Text.Json;
using backend.Schemas;
namespace backend.Services
{
    public class DatabaseJSONService : IDatabaseService
    {
        private readonly IFileService _fileService;
        private readonly string _certificationPath;
        private readonly string _certificationImgPath;
        private readonly JsonSerializerOptions _defaultOption;

        public DatabaseJSONService(IFileService fileService)
        {
            _fileService = fileService;
            _certificationPath = "Database/certifications.json";
            _certificationImgPath = "Database/certificationImgs.json";
            _defaultOption = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
        }

        public async Task<IReadOnlyList<T>> FetchFromJsonFileAsync<T>(string path)
        {
            if (!_fileService.Exists(path))
            {
                throw new FileNotFoundException($"The database file was not found at path {path}");
            }

            string databaseJson = await _fileService.ReadAllTextAsync(path);
            List<T>? items = JsonSerializer.Deserialize<List<T>>(databaseJson, _defaultOption);

            if (items == null)
            {
                throw new JsonException($"Failed to deserialize file at {path}: JSON content is invalid or empty.");
            }

            return items;
        }

        public async Task<IReadOnlyList<Certification>> FetchAllCertifications()
        {
            return await FetchFromJsonFileAsync<Certification>(_certificationPath);
        }

        public async Task<Certification?> FetchCertificationById(string id)
        {
            IReadOnlyList<Certification> certifications = await FetchAllCertifications();
            var cert = certifications.FirstOrDefault(c => c.ID == id);
            return cert;
        }


        private async Task<IReadOnlyList<CertificationImg>> FetchAllCertificationsImg()
        {
            return await FetchFromJsonFileAsync<CertificationImg>(_certificationImgPath);

        }

        public async Task<CertificationImg?> FetchAssetById(string id)
        {
            IReadOnlyList<CertificationImg> images = await FetchAllCertificationsImg();
            var img = images.FirstOrDefault(c => c.ID == id);
            return img;
        }
    }
}

