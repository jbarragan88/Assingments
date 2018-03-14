print "Initializing the program... . .  .   ."
import random
heads = 0       #variables that count how many times how many heads and tails have passed
tails = 0
for i in range(1,5001):     #for loops runs in the range of 1 till 5,000
    x = random.randint(60,101)      #creates a random number each time it loops through from 60 to 100
    if x%2 == 0:        #if the random number is even, add 1 to the tails and print out attemp number, that it's a tail, and how many tails and heads we've had thus far
        tails += 1
        print "Attempt #", i, ": Throwing a coin... It's a Tail!... Got ", heads, " head(s) so far and ", tails, "tails(s) so far"
    elif x%2 == 1:      #else if the random number is odd, add 1 to the heads and print out attemp number, that it's a head, and how many tails and heads we've had thus far
        heads += 1
        print "Attempt #", i, ": Throwing a coin... It's a Head!... Got ", heads, " head(s) so far and ", tails, "tails(s) so far"
print "Program ending... . .  .  . Thank You for playing!"