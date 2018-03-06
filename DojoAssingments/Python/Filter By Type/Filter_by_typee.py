x = ['name','address','phone number','social security number']
if type(x) == int:
    if x >= 100:                            #if statements check what type the given value is
        print "That's a big number"
    else:
        print "That's a small number"
elif type(x) == str:
    if len(x) >= 50:
        print "That's a long sentence"
    else:
        print "That's a short sentence"
elif type(x) == list:
    if len(x) >= 10:
        print "Big list!"
    else:
        print "Short list"
