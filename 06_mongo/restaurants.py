import pymongo

SERVER_ADDR = "167.99.6.27"
connection = pymongo.MongoClient(SERVER_ADDR)

db = connection.test
collection = db.restaurants

print(collection)

def boro_find(borough):
    '''
    finds restaurants by borough and returns them in a list.
    '''
    restuarants = collection.find({'borough':borough})
    return [restuarant for restuarant in restuarants]

print(boro_find("Brooklyn"))
