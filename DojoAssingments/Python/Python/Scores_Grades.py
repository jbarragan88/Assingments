import random
for i in range(10):
    x = random.randint(60,101)
    if x > 59 and x<70:
        print "Score: ", x, " Your garde is D"
    if x > 69 and x < 80:
         print "Score: ", x, " Your garde is C"
    if x > 79 and x < 90:
         print "Score: ", x, " Your garde is B"
    if x > 89 and x < 101:
         print "Score: ", x, " Your garde is A"