using System;

namespace Puzzles
{
    class Program
    {
        //Random Array
        public static int[] RandomArray()
        {
            Random rand = new Random();
            int[] random = new int[10];
            //Place 10 random integer values between 5-25 into the array
            for (int i = 0; i < 10; i++)
            {
                random[i] = rand.Next(5,25);
            };
            int max = 0;
            int min = 0;
            int index = 0;
            int sum = 0;
            //Print the min and max values of the array
            foreach(var value in random)
            {
                Console.WriteLine("The Array Values: "+ value);
                sum += value;
                if(index == 0)
                {
                    max = value;
                    min = value;
                    index++;
                }
                else if(value > max)
                {
                    max = value;
                    index++;
                }
                if(value < min)
                {
                    min = value;
                    index++;
                }
            }
            Console.WriteLine("Max Number In Random Array: "+ max+ " Min Number In Array: "+ min);
            Console.WriteLine("Total Sum Of Random Array: "+ sum);
            return random;
        } 
        //
        //Coin Flip
        public static string flip()
        {
            //Have the function print "Tossing a Coin!"
            Console.WriteLine("Tossing a Coin!");
            Random rand = new Random();
            int randomNum = rand.Next(0,100);
            //Randomize a coin toss with a result signaling either side of the coin 
            string side = "Heads";
            if(randomNum%2 == 0)
            {
                side = "Tails";
            }
            //Have the function print either "Heads" or "Tails"
            Console.WriteLine(side);
            //Finally, return the result
            return side;
        }
        //
        //Names
        public static string[] nombres()
        {
            //Create an array with the values: Todd, Tiffany, Charlie, Geneva, Sydney
            string[] someNames = {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            Random rand = new Random();
            // int randomNum = rand.Next(0,someNames.Length);
            for(int i = 0; i < someNames.Length; i++)
            {
                //Shuffle the array and print the values in the new order
                Console.WriteLine("Initial value: "+ someNames[i]);
                int randomNum = rand.Next(0,someNames.Length);
                string temp = someNames[i];
                someNames[i] = someNames[randomNum];
                someNames[randomNum] = temp;
                Console.WriteLine("Final value: "+ someNames[i]);
            };
            //Return an array that only includes names longer than 5 characters
            int counter = 0;
            for(int i = 0; i < someNames.Length; i++)
            {
                if(someNames[i].Length > 5)
                {
                    counter++;
                };
            };
            string[] lessNames = new string[counter];
            int x = 0;
            for(int i = 0; i < someNames.Length; i++)
            {
                if(someNames[i].Length > 5)
                {
                   lessNames[x] = someNames[i];
                   x++;
                };
            };
            return lessNames;
        }
        //
        static void Main(string[] args)
        {
            //Random Array
            // int[] random = RandomArray();
            //Coin Flip
            // string coinFlip = flip();
            // Console.WriteLine(coinFlip);
            //Names
            string[] names = nombres();
            foreach(var name in names)
            {
                Console.WriteLine("Outside Function Name Array: "+ name);
            }
        }
    }
}
