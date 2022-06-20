List = []
print("Blank List: ")
print(List)
 
# Creating a List of numbers
List = [10, 20, 14]
print("\nList of numbers: ")
print(List)
 
# Creating a List of strings and accessing
# using index
List = ["live", "For", "yourself"]
print("\nList Items: ")
print(List[0])
print(List[2])
 
# Creating a Multi-Dimensional List
# (By Nesting a list inside a List)
List = [['die', 'For'], ['a reason']]
print("\nMulti-Dimensional List: ")
print(List)

# Creating a List
List = ['a', 'b', 'c', 'd', 'e', 'F',
        'g', 'h', 'i', 'j', 'l', 'm', 'n']
print("Initial List: ")
print(List)
 
# Print elements from beginning
# to a pre-defined point using Slice
Sliced_List = List[:-6]
print("\nElements sliced till 6th element from last: ")
print(Sliced_List)
 
# Print elements of a range
# using negative index List slicing
Sliced_List = List[-6:-1]
print("\nElements sliced from index -6 to -1")
print(Sliced_List)
 
# Printing elements in reverse
# using Slice operation
Sliced_List = List[::-1]
print("\nPrinting List in reverse: ")
print(Sliced_List)