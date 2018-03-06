x = ["9,19,98.98,3","ints"]
new_string = []
summing = 0
for count in x:              #for loop goes through  each index in the given list
    if isinstance(count, str):      #if the index is a string append the string into a new string
        new_string.append(count)
    if isinstance(count, int):      #if the index is an integer add the integer to the last number left in the summing variable
        summing = summing + count
    if isinstance(count, float):       #if it's a float add it to the sums
        summing = summing + count       #-------end of for loop
stringss = 0    #new variables to add each time a string or integer appears on the list
intss = 0
for i in x:
    if isinstance(i, str):      #if the index is a string add one to stringss
        stringss += 1
    if isinstance(i, int):      #if the index is an integer add one to the intss
        intss += 1
    if isinstance(i, float):        #if the index is a float add one to the intss
        intss += 1      #------end of for loop
if stringss > 0 and intss > 0:      #if the stringss and intss is greater than 0 print "its mixed"
    analysis = "It's a mixed list."
else:       #if not then check which variable is greater than 0 and print out the corresponding string
    if intss > 0:
        analysis = "This list is only integers."
    else:
        analysis = "This list is only strings."
print analysis
print "String: ", new_string
print "The sum is ", summing
