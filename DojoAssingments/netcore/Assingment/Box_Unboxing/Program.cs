using System;
using System.Collections.Generic;

namespace Box_Unboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            //
            //
            //
            //Create an empty List of type object
            List<object> someList = new List<object>
            {
                
            };
            //Add the following values to the list: 7, 28, -1, true, "chair"
            someList.Add(7);
            someList.Add(28);
            someList.Add(-1);
            someList.Add(true);
            someList.Add("chair");
            //Loop through the list and print all values
            for(int i = 0; i < someList.Count; i++)
            {
                Console.WriteLine(someList[i]);
            };
            //Add all values that are Int type together and output the sum
            int sum = 0;
            for(int i = 0; i < someList.Count; i++)
            {
                Console.WriteLine("Do we add? "+someList[i]);
                if(someList[i] is int)
                {
                    int number = Convert.ToInt32(someList[i]);
                    Console.WriteLine(someList[i]);
                    sum += number;
                };
            };
            Console.WriteLine("The total sum: "+sum);
            //
            //
            //
        }
    }
}
