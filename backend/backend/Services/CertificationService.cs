using System;
using System.Text.Json;
using backend.Schemas;

namespace backend.Services
{
    public interface ICertificationService
    {
        public List<Certification> FetchAllCertifications();
    }

    public class CertificationService: ICertificationService
    {
        public List<Certification> FetchAllCertifications()
        {
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            string databasePath = "Database/database.json";

            if (!System.IO.File.Exists(databasePath))
            {
                // Optionally return an empty list or throw an error
                return new List<Certification>();
            }

            string databaseJson = System.IO.File.ReadAllText(databasePath);
            List<Certification>? certifications = JsonSerializer.Deserialize<List<Certification>>(databaseJson, options);

            return certifications ?? new List<Certification>();
        }
    }
}
