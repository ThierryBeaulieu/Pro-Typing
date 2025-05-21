using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Schemas
{
	public class Certification
	{
        [Required]
        public string ID { get; set; } = string.Empty;

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required]
        public string Range { get; set; } = string.Empty;

        [Required]
        public string ImgID { get; set; } = string.Empty;

    }
}

