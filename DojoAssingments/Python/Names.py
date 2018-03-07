'''
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def nombre(list):
    x = 0
    for i in list:
        print list[x]['first_name'], list[x]['last_name']
        x = x+1
#nombre(students)
'''
users = {
    'Students': [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ],
    'Instructors': [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
    ]
}
def stuTea(dict):
    x = 1
    for i in range(len(dict['Students'])):
        length = len(dict['Students'][i]['first_name'])+len(dict['Students'][i]['last_name'])
        if i == 0:
            print "Student:"
        print x,"-",dict['Students'][i]['first_name'], dict['Students'][i]['last_name'], "-", length
        x += 1
    for y in range(len(dict['Instructors'])):
        length = len(dict['Instructors'][y]['first_name'])+len(dict['Instructors'][y]['last_name'])
        if y == 0: 
            print "Instructors:"
            x = 1
        else:
            x +=1
        print x,"-", dict['Instructors'][y]['first_name'], dict['Instructors'][y]['last_name'], "-", length
stuTea(users)