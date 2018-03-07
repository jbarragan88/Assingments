class Car(object):              #create class/object car
    def __init__(self, price, speed, fuel, mileage):                #filling attributes with price, speed, fuel, mileage, and tax of the car
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 0.12
    def display(self):              #method(function) to display all Car info
        print "Price:", self.price
        print "Max Speed:", self.speed,"mph"
        print "Fuel:", self.fuel
        print "Mileage:", self.mileage, "mpg"
        print "Tax:", self.tax
        print ""
        return self
    def fuelTank(self):             #method(function) to set the fuel to wether it's full or empty
        if  self.fuel > 75:
            self.fuel = 'Full'
        elif self.fuel >50 and self.fuel <76:
            self.fuel = 'Partly Full'
        elif self.fuel >25 and self.fuel <51:
            self.fuel = 'Half Full'
        elif self.fuel >= 0 and self.fuel <26:
            self.fuel = 'Needs Fueling'
        return self
    def fixTax(self):               #method(function) to set the tax to 15 percent if  the car is greater than 10 000
        if self.price > 10000:
            self.tax = 0.15
        return self
car1 = Car(12000, 120, 20, 35)              #creating six instances of the car with its respective information
car1.fuelTank().fixTax().display()              #running the methods from the car to display all car information
car2 = Car(1000,100, 74,30)
car2.fuelTank().fixTax().display()
car3 = Car(300123, 320, 87,24)
car3.fuelTank().fixTax().display()
car4 = Car(33432,193, 34, 30)
car4.fuelTank().fixTax().display()
car5 = Car(31000, 200, 67, 34)
car5.fuelTank().fixTax().display()
car6 = Car(500, 100, 34,27)
car6.fuelTank().fixTax().display()