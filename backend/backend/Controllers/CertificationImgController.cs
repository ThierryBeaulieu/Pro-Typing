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
    public class CertificationImgController : Controller
    {
        private readonly ILogger<CertificationImgController> _logger;
        private readonly ICertificationImgService _service;

        public CertificationImgController(ICertificationImgService service, ILogger<CertificationImgController> logger)
        {
            _logger = logger;
            _service = service;
        }

        /// <summary>
        /// Retrieves an asset based on its unique identifier
        /// </summary>
        /// <param name="id">The unique identifier of the asset.</param>
        /// <returns>
        /// Returns 200 OK with the asset data if found,
        /// 404 Not Found if the asset does not exist,
        /// or 500 Internal Server Error if an exception occurs.
        /// </returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            try
            {
                var certification = await _service.FetchAssetById(id);

                if (certification == null)
                {
                    _logger.LogWarning("CertificationImg with ID {CertificationImg} not found.", id);
                    return NotFound(new { message = $"CertificationImg   with ID {id} not found." });
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