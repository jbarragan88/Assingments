def draw_stars(arr):        #function
    stars = ""      #empty variable sting to add * as needed
    for i in arr:       #for loop to go through each specific number in the array/list
        stars = ""       #after the for loop goes through a new indx variable in the list i resets the stars variable 
        if isinstance(i, int):     
            for x in range(1,i+1):      #for loop that runs from range of 1 until the value of the list variable plus one to run the loop the same amount as the number
                stars = stars+"*"       #---> end of loop adds a * each time the loop is run
        elif isinstance(i, str):
            for x in range(1,len(i)+1):
                stars = stars+i[0]      #adds the firsts letter of the string to stars variable
        print stars     #--->end of loop prints the stars string 
draw_stars([10,20,'Hello',4,5,'Jonathan'])        #calls function