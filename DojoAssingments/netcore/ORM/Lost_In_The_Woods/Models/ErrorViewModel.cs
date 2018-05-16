using System;
using System.ComponentModel.DataAnnotations;

namespace Lost_In_The_Woods.Models
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }

    public class Trail : BaseEntity
    {
        public int idTrail { get; set;}

        public string Name  { get; set;}

        public string Description { get; set;}

        public double Length  { get ; set; }

        public int Elevation  { get ; set; }

        public double Longitude { get; set; }

        public double Latitude { get; set;} 
    }

    public class TrailViewModel:BaseEntity
    {
        [Required]
        public string Name  { get; set;}

        [Required]
        [MinLength(10)]
        public string Description { get; set;}

        [Required]
        public double Length  { get ; set; }

        [Required]
        public int Elevation  { get ; set; }

        [Required]
        public double Longitude { get; set; }

        [Required]
        public double Latitude { get; set;} 
    }
}