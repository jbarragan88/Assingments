using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Login_Registration.Models;
using Microsoft.AspNetCore.Http;

namespace Login_Registration.Controllers
{
    public class Logged_InController : Controller
    {

        public IActionResult Home() //Render Home.cshtml
        {
            ViewBag.User_Email = HttpContext.Session.GetString("User");
            return View("Home");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}