using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using BankAccounts.Models;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BankAccounts.Controllers
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

        [HttpPost]
        [Route("Register")]
        public IActionResult Register(RegisterViewModel model, string email)
        {
            if(ModelState.IsValid) //if All the Inputs meet requirements then run
            {
                if(_context.User.SingleOrDefault(qUser => qUser.Email == model.Email) != null){
                    ViewBag.duplicate = true;
                    return View("Index");
                }
                else{
                    User newUser = new User {
                        First_Name = model.First_Name,
                        Last_Name = model.Last_Name,
                        Email = model.Email,
                        Password = model.Password
                    };
                    PasswordHasher<User> Hasher = new PasswordHasher<User>();
                    newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                    _context.User.Add(newUser);
                    _context.SaveChanges();
                    HttpContext.Session.SetString("user",newUser.Email);

                    return RedirectToAction("Bank");
                }
            }
            //if an input did not meet a requirement render the index page
            return View("Index");
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(LoginViewModel model, string email, string password)
        {
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            if(ModelState.IsValid) //if All the Inputs meet requirements then run
            {
                User aUser = _context.User.SingleOrDefault(qUser => qUser.Email == email);
                if (aUser != null && password != null){
                    if(0 != Hasher.VerifyHashedPassword(aUser, aUser.Password, password)){
                    HttpContext.Session.SetString("user", email);
                    return RedirectToAction("Bank");
                    }
                    else{
                        ViewBag.Login = false;
                        return View("Index");
                    }
                }
            }
            //if an input did not meet a requirement render the index page
            return View("Index");
        }

        [HttpGet]
        [Route("Bank")]
        public IActionResult Bank()
        {
                string email = HttpContext.Session.GetString("user");
                User theUser = _context.User.Include(User => User.Transaction).Where(User => User.Email == email).SingleOrDefault();
                ViewBag.CompleteUser = theUser;
                // if (aUser != null && password != null){
                //     if(0 != Hasher.VerifyHashedPassword(aUser, aUser.Password, password)){
                //     HttpContext.Session.SetString("user", email);
                //     return View("Bank");
                // }
                // else{
                //     ViewBag.Login = false;
                //     return View("Index");
                // }
                // }
            return View("Bank");
        }
    }
}
