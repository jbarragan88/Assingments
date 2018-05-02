namespace Human {

    public class Human{
        public string name;
        public int strength = 3;
        public int intelligence = 3;
        public int dexterity = 3;
        public int health = 100;

        public Human(string name){
            this.name = name;
        }

        public Human(string name, int strength, int intelligence, int dexterity, int health = 00){
            this.name = name;
            this.strength = strength;
            this.intelligence = intelligence;
            this.dexterity = dexterity;
            this.health = health;
        }
        public void attack(Human prey){
            int attackPoints = 5*this.strength;
            prey.attacked(attackPoints);
        }
        public void attacked(int subtract){
            this.health = this.health-subtract;
        }
    }
}