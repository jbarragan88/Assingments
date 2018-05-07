using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace YourNamespace.Controllers
{
    public class HelloController : Controller
    {
        // [HttpGetAttribute]
        // public string Index()
        // {
        //     return "Hello World!!!!";
        // }
        // [HttpGet]
        // [Route("index")]
        // public string Index()
        // {
        //     return "Hello World! Joonathan";
        // }
        // public class YourController : controller
        // {
        //     [HttpGet]
        //     [Route("")]
        //     public JsonResult Example()
        //     {
        //         // The Json method convert the object passed to it into JSON
        //         return Json(SomeC#Object);
        //     }
        // }
        [HttpGet]
        [Route("index/{firstName}/{lastName}/{age}/{color}")]
        public JsonResult DisplayInt(string firstName, string lastName, int age, string color)
        {
            var Info = new {
                                firstName = firstName,
                                lastName = lastName,
                                Age = age,
                                color = color
                            };
            return Json(Info);
        }
        // [HttpGet]
        // [Route("template/{Name}")]
        // public IActionResult Method(string Name)
        // {
            // Method body
        // }

    }
}