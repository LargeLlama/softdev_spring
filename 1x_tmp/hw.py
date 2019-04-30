def repeat(string):
    def repeat_inner(times):
        return times * string
    return repeat_inner

r1 = repeat("Hey")
r2 = repeat("UwU ")

print(r1(3))
print(r2(5))
print(repeat(":3 ")(3))

'''
def outer():
    x = "foo"
    def inner():
        x = "bar"
    inner()
    return x
'''

def outer():
    x = "foo"
    def inner():
        nonlocal x 
        x = "bar"
    inner()
    return x

print(outer())

def make_counter():
    x = 0
    def counter():
        nonlocal x
        x += 1
        return x
    return counter

ctr1 = make_counter()
print(ctr1())
print(ctr1())
print(ctr1())
