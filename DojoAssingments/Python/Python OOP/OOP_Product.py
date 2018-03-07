class Product(object):
    def __init__(self, price, item_name, weight, brand, returnn):
        self.price = price
        self.item_name= item_name
        self.weight = weight
        self.brand = brand
        self.status = 'for sale'
        self.returnn = returnn
    def sell(self):
        self.status = sold
    def tax(self):
        tax = 0.05
        taxing = tax*self.price
        self.price = self.price+taxing
        return self
    def returned(self):
        if self.returnn == 'defective':
            self.status = 'defective'
            self.price = 0
            self.status = 'trash'
        elif self.returnn == 'opened':
            self.status = 'used'
            tax = 0.20
            taxing = tax*self.price
            self.price =self.price-taxing
        return self
    def display_info(self):
        print self.item_name
        print "Price: $", self.price
        print "Weight:", self.weight, "lbs."
        print "Brand:", self.brand
        print self.status
product1 = Product(25, 'Tide Softener', 5.7,'Tide', 'defective')
product1.returned().tax().display_info()
