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
        [HttpGet]
        [Route("index")]
        public string Index()
        {
            return "Hello World! Joonathan";
        }
        // [HttpGet]
        // [Route("template/{Name}")]
        // public IActionResult Method(string Name)
        // {
            // Method body
        // }

    }
}
