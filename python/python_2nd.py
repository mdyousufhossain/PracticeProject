#2nd
#buildInmethod{string formating}

exp2 ="""
      
There are four different ways to perform string formatting:-
Formatting with % Operator.
Formatting with format() string method.
Formatting with string literals, called f-strings.
Formatting with String Template Class  

"""
print(exp2)

example = """
    ‘%s’ is used to inject strings similarly ‘%d’ for integers, ‘%f’ for floating-point values, ‘%b’ for binary format, there are many other format aswell.
"""

print(example)
name = "his name is %s"

print(name %'Yousuf')

example1 = """
    Format() method was introduced with Python3 for handling complex string formatting more efficiently. Formatters work by putting in one or more replacement fields and placeholders defined by a pair of curly braces { } into a string and calling the str.format(). The value we wish to put into the placeholders and concatenate with the string passed as parameters into the format function. 
"""
print(example1)


print('We are {} studend.'.format('DPI'))

print('{2} {1} {0}'.format('Last','second', 'first'))


exp2 = """
    To create an f-string, prefix the string with the letter “ f ”. 
    The string itself can be formatted in much the same way 
    that you would with str.format().F-strings provide a 
    concise and convenient way to embed python expressions 
    inside string literals for formatting.
"""

print(exp2)

a = 5

b = 10

print(f"He said his age is {2 * (a + b)}.")

