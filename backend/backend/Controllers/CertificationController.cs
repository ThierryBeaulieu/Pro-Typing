using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using backend.Schemas;
using System.Text.Json;
using backend.Services;


namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class CertificationController : Controller
    {
        private readonly ILogger<CertificationController> _logger;
        private readonly ICertificationService _service;

        public CertificationController(ICertificationService service, ILogger<CertificationController> logger)
        {
            _logger = logger;
            _service = service;
        }

        // GET: api/certification
        [HttpGet]
        public async Task<IEnumerable<Certification>> Get()
        {
            IReadOnlyList<Certification> certifications = await _service.FetchAllCertifications();
            return certifications;
        }

        // GET api/certification/6b18c787-e28b-4bc2-abea-3899a1fa5da5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            try
            {
                var certification = await _service.FetchCertificationByID(id);

                if (certification == null)
                {
                    return NotFound(new { message = $"Certification with ID {id} not found." });
                }

                return Ok(certification);
            }
            catch (Exception ex)
            {
                // Log the exception (ideally using a logger, here just an example)
                Console.Error.WriteLine($"Error in Get(id): {ex.Message}\n{ex.StackTrace}");

                return StatusCode(500, new { message = "An error occurred while processing your request." });
            }
        }

    }
}