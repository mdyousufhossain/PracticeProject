#concatenation

world = 'World!'
number = '69'

a = 'Hello ' + ' ' + world + ' ' + number

#Repetition
str = 'Python program'
print(str[7:9]*3) #Repeats the seventh and eighth character three times

# using 'in' operator
list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9]
for item in list1:
    if item in list2:
        print("overlapping")
    else:
        print("not overlapping")
        
print(r"C\Users\MyName\Desktop")