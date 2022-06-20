# data type coversation
# Implicit Type Conversion
exp = """ 
        In Implicit type conversion of data types in Python,
        the Python interpreter automatically 
        converts one data type to another without any user involvement.
"""
print(exp)

num = 10

print("num is of type:",type(num))

fl_num = 10.6
print("fl_num is of type:",type(fl_num))

sum = num + fl_num

print(sum)
print("x is of type:",type(sum))

stri = "my name is "

print("stri is of type:",type(stri))
print(stri)

string_num = "123"
print("string num is of type:",type(string_num))

sumOFStringAndstring = string_num + stri 

print("sum of string and num is of type:",type(sumOFStringAndstring))

print(sumOFStringAndstring)

#bonus
#Explicit Type Conversion

exp1 = """
    In Explicit Type Conversion in Python, the data type is manually changed by the user as per their requirement. Various forms of explicit type conversion are explained below:
"""

str_num = "1000"

converted_str_num = int(str_num)








