using System;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            Human John = new Human("Jonathan", 500, 50, 88, 120);
            Console.WriteLine("Your Name is {0}. Strength: {1} Health: {2}", John.name, John.strength, John.health);
            Human Someone = new Human("Maribel");
            Console.WriteLine("Your Name is {0}. Strength: {1} Health: {2}", Someone.name, Someone.strength, Someone.health);
            Someone.attack(John);
            Console.WriteLine("Name {0}. Health: {1}", John.name, John.health);

        }
    }
}
