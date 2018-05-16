using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Lost_In_The_Woods.Models;
using Lost_In_The_Woods.Factory;
using Microsoft.AspNetCore.Http;
using System.Text.RegularExpressions;

namespace Lost_In_The_Woods.Controllers
{
    public class HomeController : Controller
    {
        private readonly TrailFactory trailFactory;
        public HomeController()
        {
            //Instantiate a UserFactory object that is immutable (READONLY)
            //This establishes the initial DB connection for us.
            trailFactory = new TrailFactory();
        }

        public IActionResult Index()
        {
            ViewBag.Trails = trailFactory.FindAll();
            return View();
        }

        public IActionResult NewTrail()
        {
            ViewBag.Trails = trailFactory.FindAll();
            return View("NewTrail");
        }

        public IActionResult Add(TrailViewModel newTrail)
        {
            if(ModelState.IsValid){
                Trail trail = new Trail {
                    Name = newTrail.Name,
                    Description = newTrail.Description,
                    Length = newTrail.Length,
                    Elevation = newTrail.Elevation,
                    Latitude = newTrail.Latitude,
                    Longitude = newTrail.Longitude
                };
                trailFactory.Add(trail);
                return RedirectToAction("Index");
            }
            return View("NewTrail");
        }

        [HttpGet]
        [Route("Home/trail/{idTrail}")]
        public IActionResult Trail(int idTrail){
            ViewBag.trail = trailFactory.FindOne(idTrail);
            return View("Trail");
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
