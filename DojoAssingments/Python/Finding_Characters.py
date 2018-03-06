# input
word_list = ['hello','world','my','name','is','Anna','Jonathan']
char = 'o'
new_list = []
for counter in word_list:       #goes through each index in the list
    if char in counter:     #if o in the char variable is in the word in the index append it to the new list
        new_list.append(counter)        #------end of loop
print new_list
# output
#new_list = ['hello','world']
