#typical fib function

def old_fib(n):
    if n <= 1:
        return n
    else:
        return fib(n - 1) + fib(n - 2)

#test
print("Old way!")
print(old_fib(5))
print(old_fib(10))

#faster, new
def memoize(f):
    memo = {}
    def helper(x):
        return x #filler
    return helper

def fib(n):
    return n #filler
