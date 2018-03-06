list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']
i = 0
for counter in list_one:
    if counter == list_two[i]:
        i += 1
        compare = "The lists are the same"
    else: 
        compare = "The lists are not the same"
        break
print compare
    