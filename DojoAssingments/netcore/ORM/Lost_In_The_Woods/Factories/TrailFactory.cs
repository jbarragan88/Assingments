using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using Lost_In_The_Woods.Models;
 
namespace Lost_In_The_Woods.Factory
{
    public class TrailFactory : IFactory<Trail>
    {
        private string connectionString;
        public TrailFactory()
        {
            connectionString = "server=localhost;userid=root;password=root;port=3306;database=Trails;SslMode=None";
        }
        internal IDbConnection Connection
        {
            get {
                return new MySqlConnection(connectionString);
            }
        }

        //Get All Trails From database
        public IEnumerable<Trail> FindAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Trail>("SELECT * FROM Trail");
            }
        }
        //Add Trail
        public void Add(Trail item)
        {
            string query = "INSERT INTO Trail (Name, Description, Length, Elevation, Latitude, Longitude) VALUES (@Name, @Description, @Length, @Elevation, @Latitude, @Longitude)";
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }

        public Trail FindOne(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Trail>("SELECT * FROM Trail WHERE idTrail=@id", new {id = id}).FirstOrDefault();
            }
        }
    }
}