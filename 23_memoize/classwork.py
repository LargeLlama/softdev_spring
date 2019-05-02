import random

'''
def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'HOLA', 'Bonjour', 'Word up']
    return random.choice(greetings)

greet_heading = make_HTML_heading(greet)
print(greet_heading())
'''

def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

# Neat use of decorator, whenever greet is called, make_HTML_heading is called with 'greet' as its input
@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'HOLA', 'Bonjour', 'Word up']
    return random.choice(greetings)

print(greet())
