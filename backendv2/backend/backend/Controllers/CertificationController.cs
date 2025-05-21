using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using backend.Schemas;
using System.Text.Json;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class CertificationController : Controller
    {
        // GET: api/certification
        [HttpGet]
        public IEnumerable<Certification> Get()
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

        // GET api/certification/6b18c787-e28b-4bc2-abea-3899a1fa5da5
        [HttpGet("{id}")]
        public Certification Get(string id)
        {

            Certification certification = new()
            {
                ID = "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
                Name = "Average Typist",
                Description = "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
                Range = "40-55 words per minute",
                ImgID = "1e0c8f97-9ec2-4353-b8eb-482b2a45c9c5"
            };

            return certification;
        }


    }
}