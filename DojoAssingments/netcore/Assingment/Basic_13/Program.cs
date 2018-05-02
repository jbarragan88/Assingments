using System;

namespace Basic_13
{
    class Program
    {
        public static void all()
        {
            for(int i = 1; i <= 255; i++)
            {
                Console.WriteLine(i);
            };
        }
        //
        public static void odd()
        {
            for(int i = 1; i <= 255; i++)
            {
                if(i%2 == 1){
                    Console.WriteLine(i);
                };
            };
        }
        //
        public static void sum()
        {
            int sum = 0;
            for(int i = 1; i <= 255; i++)
            {
                sum += i;
                Console.WriteLine("Number: "+i+" Sum Thus Far: "+ sum);
            };
        }
        //
        public static void Arrayy(Array arr)
        {
            foreach (var value in arr)
            {
                Console.WriteLine(value);
            }
        }
        //
        public static void findMax(Array arr)
        {
            int maxx = 0;
            for(int inde = 0; inde < 2; inde++)
            {
                if(inde == 0)
                    {
                        foreach(var value in arr)
                        {
                            if(inde == 0)
                            {
                                maxx = Convert.ToInt32(value);
                            }
                        }
                    }
                else{
                    foreach (var value in arr)
                    {
                        Console.WriteLine("Value? "+value);
                        if(Convert.ToInt32(value) > maxx)
                        {
                            maxx = Convert.ToInt32(value);
                        }
                    }
                }
            };
            Console.WriteLine("the Max? "+maxx);
        }
        //
        public static void avg(Array arr)
        {
            int addition = 0;
            foreach (var value in arr)
            {
                Console.WriteLine(value);
                addition += Convert.ToInt32(value);
            }
            int average = addition/arr.Length;
            Console.WriteLine("The average: "+ average);
        }
        //
        public static void arrayOdd()
        {
            int counter = 0;
            for(int i = 0; i <= 255; i++)
            {
                if(i%2 == 1){
                    counter++;
                };
            };
            Console.WriteLine("Counter thus far "+ counter);
            int[] y = new int[counter];
            int x = 0;
            for(int i = 0; i <= 255; i++)
            {
                if(i%2 == 1){
                    y[x] = i;
                    x++;
                    Console.WriteLine("At index: "+ x);
                };
            };
            foreach(var arr in y)
            {
                Console.WriteLine("Values in Array"+arr);
            }
        }
        //
        public static int greaterY(Array arr)
        {
            int y = 3;
            int counter = 0;
            foreach (var value in arr)
            {
                if(Convert.ToInt32(value) > y)
                {
                    Console.WriteLine(value);
                    counter++;
                };
            }
            return counter;
        }
        //
        public static Array squareRoot(int[] arr)
        {
            for(int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
                arr[i] = arr[i]*arr[i];
                Console.WriteLine("Changed value? "+arr[i]);
            }
            return arr;
        }
        //
        public static int[] swapNegative(int[] arr)
        {
            for(int i = 0; i < arr.Length; i++)
            {
                if(arr[i] < 0)
                {
                    arr[i] = 0;
                }
                // Console.WriteLine(arr[i]);
                // arr[i] = arr[i]*arr[i];
                // Console.WriteLine("Changed value? "+arr[i]);
            }
            return arr;
        }
        //
        static void Main(string[] args)
        {
            //
            //
            //
                // all();
                // odd();
                // sum();
                //
                // int[] numArray = {1,3,5,7,9,13};
                // Arrayy(numArray);
                //
                // int[] numberr = {-3,-15,-88,-13,-8};
                // findMax(numberr);
                //
                // int[] num = {2,10,3};
                // avg(num);
                //
                // arrayOdd();
                //
                // int[] compare = {1, 3, 5, 7};
                // int answer = greaterY(compare);
                // Console.WriteLine("Number of numbers Greater than y: "+ answer);
                //
                // int[] square = {1, 5, 10, -2};
                // Array newOne = squareRoot(square);
                // foreach(var value in newOne)
                // {
                //      Console.WriteLine("The new array value: "+ value);
                // }
                //
                // int[] changeNeg = {4,-3,-2,20,-3030};
                // int[] newArr = swapNegative(changeNeg);
                // for(int i = 0; i < newArr.Length; i++)
                // {
                //     Console.WriteLine("Changed Array Value: "+ newArr[i]);
                // };
                //
                
            //
            //
            //
        }
    }
}
