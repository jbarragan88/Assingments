using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Form_Submission.Models;
using Info_Form_Submission.Models;

namespace Form_Submission.Controllers

{
    public class HomeController : Controller
    {
        [HttpPost]
        [Route("submit")]
        public IActionResult Submit(string first_name, string last_name, int age, string email, string password)
        {
            // ViewBag.errors = Dictionary<> Errors: {[string ErrorMessage: ""]};
            Info newOne = new Info 
            {
                First_Name = first_name, 
                Last_Name = last_name, 
                Age = age, 
                Email = email, 
                Password = password
            };
            TryValidateModel(newOne);
            if(ModelState.IsValid){
                return RedirectToAction("Success");
            }
            else{
                ViewBag.errors = ModelState.Values;
                return View();
            }//
        }

        [HttpGet]
        [Route("success")]
        public IActionResult Success()
        {
            return View("Success");
        }

        public IActionResult Index()
        {
            ViewBag.errors = TempData["errors"];
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
