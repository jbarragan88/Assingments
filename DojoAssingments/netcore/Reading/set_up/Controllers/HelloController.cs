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
        [Route("displayint")]
        public JsonResult DisplayInt()
        {
            var AnonObject = new {
                                FirstName = "Raz",
                                LastName = "Aquato",
                                Age = 10
                            };
            return Json(AnonObject);
        }
        // [HttpGet]
        // [Route("template/{Name}")]
        // public IActionResult Method(string Name)
        // {
            // Method body
        // }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            // return View();
            //OR
            return View("Index");
            //Both of these returns will render the same view (You only need one!)
        }
    }
}
