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


        /// <summary>
        /// Retrieves all certifications asynchronously.
        /// </summary>
        /// <returns>
        /// Returns 200 OK with a list of certifications on success,
        /// or 500 Internal Server Error if an exception occurs.
        /// </returns>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                IReadOnlyList<Certification> certifications = await _service.FetchAllCertifications();
                return Ok(certifications);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while fetching certifications.");
                return StatusCode(500, "An error occurred while fetching certifications.");
            }
        }

        /// <summary>
        /// Retrieves a certification by its unique identifier asynchronously.
        /// </summary>
        /// <param name="id">The unique identifier of the certification.</param>
        /// <returns>
        /// Returns 200 OK with the certification data if found,
        /// 404 Not Found if the certification does not exist,
        /// or 500 Internal Server Error if an exception occurs.
        /// </returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            try
            {
                var certification = await _service.FetchCertificationByID(id);

                if (certification == null)
                {
                    _logger.LogWarning("Certification with ID {CertificationId} not found.", id);
                    return NotFound(new { message = $"Certification with ID {id} not found." });
                }

                return Ok(certification);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while fetching certification with ID {CertificationId}.", id);
                return StatusCode(500, new { message = "An error occurred while processing your request." });
            }
        }

    }
}