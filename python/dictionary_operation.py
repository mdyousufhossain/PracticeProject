# Python3 code to demonstrate working of
# Perform operation on each key dictionary
# Using update() + dictionary comprehension

# Initialize dictionary
test_dict = {'gfg' : 6, 'is' : 4, 'best' : 7}

# printing original dictionary
print("The original dictionary : " + str(test_dict))

# Using update() + dictionary comprehension
# Perform operation on each key dictionary
test_dict.update((x, y * 3) for x, y in test_dict.items())

# printing result
print("The dictionary after triple each key's value : " + str(test_dict))
