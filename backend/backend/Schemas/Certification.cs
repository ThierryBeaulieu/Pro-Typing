using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Schemas
{
    public record Certification
    {
        [Required]
        public string ID { get; init; } = string.Empty;

        [Required]
        public string Name { get; init; } = string.Empty;

        [Required]
        public string Description { get; init; } = string.Empty;

        [Required]
        public string Range { get; init; } = string.Empty;

        [Required]
        public string ImgID { get; init; } = string.Empty;

    }
}
