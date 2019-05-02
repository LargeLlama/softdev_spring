#typical fib function

def old_fib(n):
    if n <= 1:
        return n
    else:
        return old_fib(n - 1) + old_fib(n - 2)

#test
print("Old way!")
print(old_fib(5))
print(old_fib(10))
#print(old_fib(100)) takes too long

#faster, new
def memoize(f):
    '''This works by storing every previous fib in a dict, and if it isn't there it is added, making the process far faster'''
    memo = {}
    def helper(x):
        nonlocal memo
        if x in memo:
            return memo[x]
        else:
            memo[x] = f(x)
            return memo[x]
    return helper

@memoize #memoize is called before fib is
def fib(n):
    '''Typical fib function '''
    if n <= 1:
        return n
    else:
        return fib(n - 1) + fib(n - 2)

print("new")
print(fib(5))
print(fib(10))
print(fib(100))
print(fib(400))
