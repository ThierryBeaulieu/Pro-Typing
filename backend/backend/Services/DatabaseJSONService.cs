using System;
using System.Text.Json;
using backend.Schemas;
namespace backend.Services

{
    public class DatabaseJSONService : IDatabaseService
    {
        public async Task<IReadOnlyList<Certification>> FetchAllCertifications()
        {
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            string databasePath = "Database/database.json";

            if (!File.Exists(databasePath))
            {
                throw new FileNotFoundException($"The database file was not found at path {databasePath}");
            }

            string databaseJson = await File.ReadAllTextAsync(databasePath);
            List<Certification>? certifications = JsonSerializer.Deserialize<List<Certification>>(databaseJson, options);

            if (certifications == null)
            {
                throw new JsonException("Failed to deserialize certifications: JSON content is invalid or empty.");
            }

            return certifications;
        }

        public async Task<Certification> FetchCertificationById(string id)
        {

            IReadOnlyList<Certification> certifications = await FetchAllCertifications();

            var cert = certifications.FirstOrDefault(c => c.ID == id);
            if (cert == null)
                throw new KeyNotFoundException($"Certification with ID '{id}' not found.");

            return cert;
        }
    }
}

