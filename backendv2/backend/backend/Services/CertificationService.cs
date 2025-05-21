using System;
using System.Text.Json;
using backend.Schemas;

namespace backend.Services
{
	public class CertificationService
	{

        private static readonly CertificationService instance = new CertificationService();

        private CertificationService() { }

        public static CertificationService Instance
        {
            get
            {
                return instance;
            }
        }

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

