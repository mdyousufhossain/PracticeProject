Tuple1 = (5, 'Welcome', 7, 'DPI')
print("\nTuple with Mixed Datatypes: ")
print(Tuple1)
 
# Creating a Tuple
# with nested tuples
Tuple1 = (0, 1, 2, 3)
Tuple2 = ('python', ' is easy')
Tuple3 = (Tuple1, Tuple2)
print("\nTuple with nested tuples: ")
print(Tuple3)
 
# Creating a Tuple
# with repetition
Tuple1 = ('Diploma',) * 3
print("\nTuple with repetition: ")
print(Tuple1)
 
# Creating a Tuple
# with the use of loop
Tuple1 = ('DPI')
n = 5
print("\nTuple with a loop")
for i in range(int(n)):
    Tuple1 = (Tuple1,)
    print(Tuple1)