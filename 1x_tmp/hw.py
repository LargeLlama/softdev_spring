def repeat(string):
    def repeat_inner(times):
        return times * string
    return repeat_inner

r1 = repeat("Hey")
print(r1(3))
