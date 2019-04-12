# Team Kyoto
# Rubin Peci and Tania Cao
# 2018-04-12
# Period 8

#Problem 1
#Make list ['00', '22', '44', '66', '88']

#loopy way
oneA = []
for x in range(0,5):
    oneA.append(str(x * 22).zfill(2))
print(oneA)

#listcompy way
oneB = [ str(x * 22).zfill(2) for x in range(5) ]
print(oneB)

#Problem 2
#Make list [7, 17, 27, 37, 47]

#loopy way
twoA = []
for x in range(0, 5):
    twoA.append(7 + (x * 10))
print(twoA)

#listcompy way
twoB = [ 7 + (x * 10) for x in range(5) ]
print(twoB)

#Problem 3
#Make list [0, 0, 0, 0, 1, 2, 0, 2, 4]


#Problem 4
#Composites on range [0, 100] in ascending order

#helper function
def is_prime(num):
    if num > 1:
        for i in range(2, num):
            if (num % i == 0):
                return False
        return True
    else:
        return True

#loopy way
def composite_range(start, end):
    fourA = []
    for x in range(start, end):
        if (not is_prime(x)):
            fourA.append(x)
    return fourA

print(composite_range(0, 100))

#listcompy way
def composite_range_comp(start, end):
    fourB = [ x for x in range(start, end) if not is_prime(x) ]
    return fourB

print(composite_range_comp(0, 100))


#Problem 5
#Primes on range [0,100] in composite order

#loopy way
def prime_range(start, end):
    fiveA = []
    for x in range(start, end):
        if is_prime(x):
            fiveA.append(x)
    return fiveA

print(prime_range(0, 100))

#listcompy way
def prime_range_comp(start, end):
    fiveB = [ x for x in range(start, end) if is_prime(x) ]
    return fiveB

print(prime_range_comp(0, 100))
