using System;
using System.Collections.Generic;

namespace Collection_Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            //Create an array to hold integer values 0 through 9
            int[] intgers = 
            {
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            };
            for(int i = 0; i < intgers.Length; i++){
                Console.WriteLine(intgers[i]);
            }

            //Create an array of the names "Tim", "Martin", "Nikki", & "Sara"
            string[] names = 
            {
                "Martin",
                "Nikki",
                "Sara"
            };
            for(int i = 0; i < names.Length; i++){
                Console.WriteLine(names[i]);
            }

            //Create an array of length 10 that alternates between true and false values, starting with true
            bool[] boollean = 
            {
                true,
                false,
                true,
                false,
                true,
                false,
                true,
                false,
                true,
                false
            };
            for(int i = 0; i < boollean.Length; i++){
                Console.WriteLine(boollean[i]);
            }

            //With the values 1-10, use code to generate a multiplication table like the one below.
            // int[,] numArray = new int[10, 10];
            // for(int i = 0; i < numArray.Length; i++){
            //     if(i == 0)
            //     {
            //        int x = 0; 
            //     };
            //     System.Console.WriteLine(numArray[i,x]);
            //     x = x+1;
            // };

            //Create a list of Ice Cream flavors that holds at least 5 different flavors (feel free to add more than 5!)
            List<string> iceCream = new List<string>
            {
                "Galleta",
                "Chicle",
                "Mango",
                "MangoConChile",
                "Vainilla"
            };
            for(int i = 0; i < iceCream.Count; i++){
                Console.WriteLine(iceCream[i]);
            };
            //Output the length of this list after building it
            Console.WriteLine("Ice Creams Length is :"+ iceCream.Count);
            //Output the third flavor in the list, then remove this value
            Console.WriteLine("Third Flavor : "+ iceCream[2]);
            iceCream.RemoveAt(2);
            //Output the new length of the list (Note it should just be one less~)
            Console.WriteLine("Neww Ice Creams Length is : "+ iceCream.Count);

            //Create a Dictionary that will store both string keys as well as string values
            Dictionary<string, string> aDict = new Dictionary<string, string>();
            Dictionary<string, string> Dict = new Dictionary<string, string>();
            //For each name in the array of names you made previously, add it as a new key in this dictionary with value null
            for(int i = 0; i < names.Length; i++)
            {
                aDict.Add(names[i], null);
                Dict.Add(names[i], null);
            };
            //For each name key, select a random flavor from the flavor list above and store it as the value
            Random rand = new Random(); // Instantiate a random number generator.
            foreach (var s in Dict.Keys)
            {
                Console.WriteLine("Dictionay: "+ s);
                int num = rand.Next(0, iceCream.Count);
                Console.WriteLine("Random Ice Cream: "+ iceCream[num]);
                aDict[s] = iceCream[num];
                Console.WriteLine("Done: ");
            };
            //Loop through the Dictionary and print out each user's name and their associated ice cream flavor.
            foreach (var s in aDict.Keys)
            {
                Console.WriteLine("Dictionay Key: "+ s +" Value: "+ aDict[s]);
            };

        }
    }
}
