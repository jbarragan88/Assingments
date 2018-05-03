using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //** */

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            //
            // IEnumerable<Artist> nameList = 
            // from artist in Artists
            // where artist.Hometown == "Mount Vernon"
            // select artist;

            // foreach (Artist artist in nameList)
            // {
            //     Console.WriteLine("Artist name {0}. Artist Age {1}",artist.RealName, artist.Age);
            // }

            // Artist FromMtVernon = Artists.Where(artist => artist.Hometown == "Mount Vernon").Single();
            // Console.WriteLine($"The artists {FromMtVernon.ArtistName} from Mt Vernon is {FromMtVernon.Age} years old");

            //** */

            //Who is the youngest artist in our collection of artists?
            //
            //Order by ages and grab the first artist
            // Artist youngest = Artists.OrderBy(artist => artist.Age).First();

            // Console.WriteLine("The youngest: "+ youngest.RealName);

            //** */

            //Display all artists with 'William' somewhere in their real name
            //
                // IEnumerable<Artist> nameList = 
                // from artist in Artists
                // where artist.RealName.Contains("William")
                // select artist;

                // foreach (Artist artist in nameList)
                // {
                //     Console.WriteLine("Artist name {0}. Artist Age {1}",artist.RealName, artist.Age);
                // }

            //** */

            //Display all groups with names less than 8 characters in length.
            //
                // IEnumerable<Group> groupList =
                // from agroup in Groups
                // where agroup.GroupName.Length < 8
                // select agroup; 
                // foreach (Group group in groupList)
                // {
                //     Console.WriteLine("Group name {0}.", group.GroupName);
                // }

            //** */

            //Display the 3 oldest artists from Atlanta
            //
                 List<Artist> eldest = Artists.OrderByDescending(artist => artist.Age).Take(3).ToList();
                 foreach(var artist in eldest){
                     Console.WriteLine("Artist {0}. His Age {1}", artist.RealName, artist.Age);
                 }
            //
            //(Optional) Display the Group Name of all groups that have members that are not from New York City

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
        }
    }
}
