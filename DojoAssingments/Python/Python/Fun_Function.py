 #Odd/Even
def odd_even():
    for x in range(1,2001):
        if x%2 == 0:
            print "Number is ",x, "an even number"
        else:
            print "Number is ", x ,"an odd number"
#odd_even()

#Multiply
def multiply(arr, y):
    new_arr = []
    for i in arr:
        new_arr.append(i*y)
    print new_arr
    return new_arr
#multiply([1,2,3,4], 5)

#Hacker Challenge

