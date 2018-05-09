using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Dojodachi.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {

            if(HttpContext.Session.GetInt32("fullness") == null){
                HttpContext.Session.SetInt32("fullness", 20);
                HttpContext.Session.SetInt32("happiness", 20);
                HttpContext.Session.SetInt32("energy", 50);
                HttpContext.Session.SetInt32("meals", 3);
            };

            int? theEnergy = HttpContext.Session.GetInt32("energy");
            int compare = (int)theEnergy;
            int? theFullness = HttpContext.Session.GetInt32("fullness");
            int comparee = (int)theFullness;
            int? theHappiness = HttpContext.Session.GetInt32("happiness");
            int compareee = (int)theHappiness;

            if(compare >= 100 && comparee >= 100 && compareee >= 100){
                ViewBag.fullness = HttpContext.Session.GetInt32("fullness");
                ViewBag.happiness = HttpContext.Session.GetInt32("happiness");
                ViewBag.energy = HttpContext.Session.GetInt32("energy");
                ViewBag.meals = HttpContext.Session.GetInt32("meals");
                TempData["WorL"] = "You've Won!";

                return View(ViewBag);
            }
            else if(compare <= 0 && comparee <= 0 && compareee <= 0){
                ViewBag.fullness = HttpContext.Session.GetInt32("fullness");
                ViewBag.happiness = HttpContext.Session.GetInt32("happiness");
                ViewBag.energy = HttpContext.Session.GetInt32("energy");
                ViewBag.meals = HttpContext.Session.GetInt32("meals");
                TempData["WorL"] = "You've Lost!";

                return View(ViewBag);

            }

            ViewBag.fullness = HttpContext.Session.GetInt32("fullness");
            ViewBag.happiness = HttpContext.Session.GetInt32("happiness");
            ViewBag.energy = HttpContext.Session.GetInt32("energy");
            ViewBag.meals = HttpContext.Session.GetInt32("meals");
            return View(ViewBag);
        }

        [HttpGet]
        [Route("/feed")]
        public IActionResult Feed()
        {
            Random rand = new Random();
            if(HttpContext.Session.GetInt32("meals") <= 0){
                TempData["message"] = "Not Enough Food";
                return RedirectToAction("Index");
            }
            else{
                int? theFullness = HttpContext.Session.GetInt32("fullness");
                Int32 moreFull = (int)theFullness;
                moreFull += rand.Next(5,10);
                HttpContext.Session.SetInt32("fullness", moreFull);

                int? theNumber = HttpContext.Session.GetInt32("meals");
                Int32 decrease = (int)theNumber;
                decrease--;
                HttpContext.Session.SetInt32("meals", decrease);
            }
            Console.WriteLine("Fed");
            return RedirectToAction("Index");
        }

        [HttpGet]
        [Route("/play")]
        public IActionResult Play()
        {
            Random rand = new Random();

            if(HttpContext.Session.GetInt32("energy") <= 0){
                TempData["message"] = "Too Tired To Play";
                return RedirectToAction("Index");
            }
            else{
                int? theNumber = HttpContext.Session.GetInt32("energy");
                Int32 decrease = (int)theNumber;
                decrease = decrease-5;
                HttpContext.Session.SetInt32("energy", decrease);

                int? theHappiness = HttpContext.Session.GetInt32("happiness");
                Int32 moreFull = (int)theHappiness;
                moreFull += rand.Next(5,10);
                HttpContext.Session.SetInt32("happiness", moreFull);
            }

            Console.WriteLine("Played");
            return RedirectToAction("Index");
        }

        [HttpGet]
        [Route("/work")]
        public IActionResult Work()
        {
            Random rand = new Random();

            if(HttpContext.Session.GetInt32("energy") <= 0){
                TempData["message"] = "Too Tired To Work";
                return RedirectToAction("Index");
            }
            else{
                int? theNumber = HttpContext.Session.GetInt32("energy");
                Int32 decrease = (int)theNumber;
                decrease = decrease-5;
                HttpContext.Session.SetInt32("energy", decrease);

                int? theMeals = HttpContext.Session.GetInt32("meals");
                Int32 moreFull = (int)theMeals;
                moreFull += rand.Next(1,3);
                HttpContext.Session.SetInt32("meals", moreFull);
            }
            Console.WriteLine("Worked");
            return RedirectToAction("Index");
        }

        [HttpGet]
        [Route("/sleep")]
        public IActionResult Sleep()
        {
            int? theNumber = HttpContext.Session.GetInt32("energy");
            Int32 increase = (int)theNumber;
            increase += 15;
            HttpContext.Session.SetInt32("energy", increase);

            int? theFullness = HttpContext.Session.GetInt32("fullness");
            Int32 moreFull = (int)theFullness;
            moreFull = moreFull-5;
            HttpContext.Session.SetInt32("fullness", moreFull);

            int? theHappiness = HttpContext.Session.GetInt32("happiness");
            Int32 lessHappy = (int)theHappiness;
            lessHappy = lessHappy-5;
            HttpContext.Session.SetInt32("happiness", lessHappy);

            Console.WriteLine("Slept");
            return RedirectToAction("Index");
        }

        [HttpGet]
        [Route("/reset")]
        public IActionResult Reset()
        {
            HttpContext.Session.Clear();

            Console.WriteLine("Reset");
            return RedirectToAction("Index");
        }
    }
}
