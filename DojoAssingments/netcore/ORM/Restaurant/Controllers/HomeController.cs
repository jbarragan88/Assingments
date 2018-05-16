using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Restaurant.Models;
using System.Linq;


namespace Restaurant.Controllers
{
    public class HomeController : Controller
    {
        private Context _context;
        public HomeController(Context context){
            _context = context;
        }
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("Reviews")]
        public IActionResult Reviews()
        {
            ViewBag.Reviews = _context.Review;
            return View("Reviews");
        }

        [HttpPost]
        [Route("New")]
        public IActionResult New_Review(Review aReview)
        {
            if(ModelState.IsValid){
                _context.Review.Add(aReview);
                _context.SaveChanges();
                return RedirectToAction("Reviews");
            }
            return View("Index");
        }
    }
}
