class Bike(object):
    def __init__(self,price,max_speed):
        self.price = price
        self.max_speed = max_speed
        miles = 0
    def displayinfo(self):
        print "$",self.price, self.max_speed, "mph"
        return self.price, self.max_speed
new_bike = Bike(120,50)
new_bike.displayinfo()
        