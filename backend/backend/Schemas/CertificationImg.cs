using System;
using System.ComponentModel.DataAnnotations;

// https://pro-typing-backend-gsevhcd3hseze8dn.canadacentral-01.azurewebsites.net/

namespace backend.Schemas
{
    public record CertificationImg
    {
        [Required]
        public string ID { get; init; } = string.Empty;

        [Required]
        public string FileName { get; init; } = string.Empty;

        [Required]
        public string Base64 { get; init; } = string.Empty;
    }
}
