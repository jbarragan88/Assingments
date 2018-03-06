x = ["9,19,98.98,3","ints"]
new_string = []
summing = 0
for count in x:
    if isinstance(count, str):
        new_string.append(count)
    if isinstance(count, int):
        summing = summing + count
    if isinstance(count, float):
        summing = summing + count
stringss = 0
intss = 0
for i in x:
    if isinstance(i, str):
        stringss += 1
    if isinstance(i, int):
        intss += 1
    if isinstance(i, float):
        intss += 1
if stringss > 0 and intss > 0:
    analysis = "It's a mixed list."
else:
    if intss > 0:
        analysis = "This list is only integers."
    else:
        analysis = "This list is only strings."
print analysis
print "String: ", new_string
print "The sum is ", summing
