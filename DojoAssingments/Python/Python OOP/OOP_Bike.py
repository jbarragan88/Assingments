class Bike(object):         #created a class/object named Bike
    def __init__(self,price,max_speed,rode,reversedd):              #its attributes(values) are price, max speed, times riden, times revesed, and miles accumalated
        self.price = price
        self.max_speed = max_speed
        self.rode = rode
        self.reversedd = reversedd
        self.miles = 0
    def displayinfo(self):              #its first method(function)prints the price, max speed, and accumalated miles 
        print "$",self.price, self.max_speed, "mph", self.miles
        return self
    def ride(self):             #next method(function) for loops each time bike was riden, adds 10 miles to miles, and prints the word riding
        for i in range (self.rode):
            self.miles += 10
            print "Riding.. . .  .  ."
        return self
    def reverse(self):              #next method(function) for loops each time bike was reversed, substracts 5 miles from miles, and prints reversing
        for x in range(self.reversedd):
            self.miles = self.miles-5
            if self.miles < 0:
                self.miles = 0
            print "Reversing.. . .  .  ."
        return self
#the three different instances of the Bike object/class, adding the pricem max speed, times rode, times going reverse
new_bike = Bike(120,50,3,1)
bike2o = Bike(399, 75,2,2)
bikeV3 = Bike(1000, 120,0,3)
#calling each instance as well as the three methods 
new_bike.ride().reverse().displayinfo() 
bike2o.ride().reverse().displayinfo()
bikeV3.ride().reverse().displayinfo()