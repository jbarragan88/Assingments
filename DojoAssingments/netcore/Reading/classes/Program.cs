using System;

namespace classes
{
    class Program
    {
        static void Main(string[] args)
        {
            Vehicle myCar = new Vehicle(5);
            Vehicle myBike = new Vehicle(1);
            Console.WriteLine(myBike.numPassenger);
            myBike.Move(1.3);
            myCar.Move(4.5);
            Console.WriteLine("My Bike Went {0}. My Car Went {1}.", myBike.dist, myCar.dist);
        }
    }
}
