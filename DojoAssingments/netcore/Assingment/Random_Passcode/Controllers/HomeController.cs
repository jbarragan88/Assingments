using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Text.RegularExpressions;

namespace Random_Passcode.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            if(HttpContext.Session.GetInt32("total") == null){
                HttpContext.Session.SetInt32("total", 1);
            }
            else{
                int? theNumber = HttpContext.Session.GetInt32("total");
                Int32 increase = (int)theNumber;
                increase += 1;
                HttpContext.Session.SetInt32("total", increase);
                // HttpContext.Session.SetInt32("total", HttpContext.Session.GetInt32("total")+1);
            }

            Random rand = new Random();
            ViewBag.Random = "AB123857DQJS9P";
            
            string replacement = Regex.Replace( ViewBag.Random , "[4,9]", rand.Next(0,9).ToString() );
            ViewBag.Random = replacement;
            replacement = Regex.Replace( ViewBag.Random , "[1,8]", rand.Next(0,9).ToString() );
            ViewBag.Random = replacement;
            replacement = Regex.Replace( ViewBag.Random , "[6,0]", rand.Next(0,9).ToString() );
            ViewBag.Random = replacement;
            replacement = Regex.Replace( ViewBag.Random , "[2,7]", rand.Next(0,9).ToString() );
            ViewBag.Random = replacement;
            replacement = Regex.Replace( ViewBag.Random , "[5,3]", rand.Next(0,9).ToString() );
            ViewBag.Random = replacement;

            ViewBag.total = HttpContext.Session.GetInt32("total");

            Console.WriteLine(HttpContext.Session.GetInt32("total"));
            Console.WriteLine(ViewBag.Random);
            return View("Index",ViewBag);
        }
    }
}
