using System;
using DbConnection;
using System.Collections.Generic;

namespace Simple_CRUD_with_SQL
{
    class Program
    {
        static public void DisplayAllUsers()
        {
            List<Dictionary<string, object>> query = DbConnector.Query("SELECT * FROM Users;");
            foreach(var entry in query)
            {
               foreach(var item in entry)
               {
                   Console.WriteLine(item.Key + " - " + item.Value);
               }
            }
}
        static void Main(string[] args)
        {
            // string InputLine = Console.ReadLine();
            // Console.WriteLine("The console string: "+ InputLine);
            DisplayAllUsers();
        }
    }
}
