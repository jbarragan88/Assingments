using System.ComponentModel.DataAnnotations;
using System;


namespace Restaurant.Models{
	public class BeforeToday:ValidationAttribute
	{
		public override bool IsValid(object value)
		{
			DateTime d = Convert.ToDateTime(value);
			return d < DateTime.Today;
		}
	}
	public class Review:BaseEntity{
		[Key]
		public int id {get;set;}

		[Display(Name="Reviewer")]
		[Required(ErrorMessage="Reviewer is required.")]
		public string Reviewer {get;set;}
        //
		[Display(Name="Restaurant")]
		[Required(ErrorMessage="Restaurant is required.")]
		public string Restaurant {get;set;}
        //
		[Required(ErrorMessage="Rating is required")]
		[Display(Name="Rating")]
		public int Rating {get;set;}
        //
		[Display(Name="Review")]
		[Required(ErrorMessage="Review is required.")]
		[MinLength(10,ErrorMessage="Review must be at least 10 characters.")]
		public string review {get;set;}
        //
		[Display(Name="Visit")]
		[Required(ErrorMessage="Date of visit is required.")]
		[BeforeToday(ErrorMessage="Date of visit must be in the past.")]
		public DateTime? Visit {get;set;}
		// public DateTime? created_at {get;set;}
		// public DateTime updated_at {get;set;}
	}
}