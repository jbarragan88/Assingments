Me = {
    "Name": "Jonathan",
    "Age": "21",
    "Country Of Birth": "The United States",
    "Favorite Language": "Python"
}
print Me
def I_Am(dict):
    for i in Me:        #Goes through each key
        print "My", i, "is", Me.get(i)      #---> end of loop prints key and me.get(i) is get(key) which gets the keys value
I_Am(Me)