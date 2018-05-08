using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        [Route("/projects")]
        public IActionResult Projects()
        {
            return View("Projects");
        }
        [HttpGet]
        [Route("/contact")]
        public IActionResult Contact()
        {
            return View("Contact");
        }
    }
}
