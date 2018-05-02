namespace  classes {

    public class Vehicle{
        public int numPassenger;
        public double dist;

        public Vehicle(int val = 0){
            numPassenger = val;
            dist = 0.0;
        }

        public void  Move(double miles){
            dist += miles;
        }
    }    
}