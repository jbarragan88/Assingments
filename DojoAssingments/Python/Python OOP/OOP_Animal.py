class Animal(object):                       #dont set the functions and attributes the same name
    def __init__(self,name, walking, running):
        self.name = name
        self.walking = walking
        self.running = running
        self.health = 100
    def walk(self):
        for i in range(self.walking):
            self.health -= 1
        return self
    def run(self):
        for x in range(self.running):
            self.health -= 5
        return self
    def display_health(self):
        print self.health
        return self
class Dog(Animal):
    def __init__(self):
        super(Dog, self).__init__()
        self.health = 150
    def animal_type(self):
        return 'Dog'
animal_1 = Dog('Tiger', 3, 2)
animal_1.walk().run().display_health()