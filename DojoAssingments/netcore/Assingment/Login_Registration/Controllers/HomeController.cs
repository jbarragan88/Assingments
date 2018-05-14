using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Login_Registration.Models;
using Microsoft.AspNetCore.Http;
using System.Text.RegularExpressions;

namespace Login_Registration.Controllers
{
    public class HomeController : Controller
    {
        private readonly DbConnector _dbConnector;
        public HomeController(DbConnector connect){
            _dbConnector = connect;
        }
        [Route("RouteName")]
        public IActionResult Register(User user)
        {
            if(ModelState.IsValid) //if All the Inputs meet requirements then run
            {
                var result = _dbConnector.Query($"SELECT * FROM User WHERE Email='{user.Email}'"); // Check Database and see if email ALready exists
                if(result.Count == 0){ //if it doesn't run
                    _dbConnector.Execute($"INSERT INTO User (First_Name, Last_Name, Email, Password) VALUES ('{user.First_Name}', '{user.Last_Name}', '{user.Email}', '{user.Password}')");
                    return RedirectToAction("Home", "Logged_In");
                }
                else{ //if it does exist
                    ViewBag.duplicate = true;
                }
            }
            //if an input did not meet a requirement render the index page
            return View("Index");
        }

        public IActionResult Login(User user)
        {
            var result = _dbConnector.Query($"SELECT * FROM User WHERE Email='{user.Email}' AND Password = '{user.Password}'"); //Look For A Matching Email, Password Combination
            if(result.Count > 0){ //If Combination is Correct Send them to Logged_In Controller and Run Home Function, and save email to Seesion: Email
                HttpContext.Session.SetString("User", user.Email);
                return RedirectToAction("Home", "Logged_In");
            }

            ViewBag.incorrect = true;//If Coombination is Incorrect Render Index Page
            return View("Index");

        }

        public IActionResult Index() //Renders Index.cshtml
        {
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
            //Errors Render Error Page
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
