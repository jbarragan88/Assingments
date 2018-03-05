a = [1, 2, 5, 10, 255, 3]
sum = 0
for count in a:
    sum = sum+count
    count += 1
avg = sum/len(a)
print avg