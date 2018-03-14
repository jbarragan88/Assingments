name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins"]

def make_dict(list1, list2):
    if len(list2) > len(list1):
        first = list2
        second = list1
    else:
        first = list1
        second = list2
    new = zip(first,second)
    new_dict = dict(new)
    print new_dict
    return new_dict
make_dict(name,favorite_animal)