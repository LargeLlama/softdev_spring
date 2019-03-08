import pymongo, pprint, json

# SERVER_ADDR = "157.230.219.18"
# connection = pymongo.MongoClient(SERVER_ADDR)

# db = connection.silicon_wings
# collection = db.pokemon

# with open("pokemon.json") as f:
#     data = json.load(f)

# collection.insert(data)

def find_types(collection, type_0, type_1):
    returned_set = set()
    if type_1 == "None":
        for pokemon in collection.find( {"type": type_0 }  ):
            returned_set.add(pokemon["name"])
    else:
        for pokemon in collection.find({ "$and": [ {"type": type_0}, {"type": type_1} ] }):
            returned_set.add(pokemon["name"])
    return list(returned_set)


#print(find_types(collection, "Water"))
#print(find_types(collection, "Fire", "Flying"))





#---------- Functions Vincent had for his previous HW

# pp = pprint.PrettyPrinter(indent=4)

# def searchType( ty ):
#     cursor = collection.find({
#         "type" : ty
#         })
#     for i in cursor:
#         pp.pprint(i)
#         print()

# # all pkmn between a certain height range                                                                                                                                                                   
# def heightRange( mini, maxi ):
#     cursor = collection.find({
#         "$and": [ {"height" : {"$gte": mini}}, {"height" : {"$lte" : maxi}} ]
#         })
#     for i in cursor:
#         pp.pprint(i)
#         print()

# # show pokemon below a certain spawn chance                                                                                                                                                                 
# def rarePoke( chance ):
#     cursor = collection.find({
#         "spawn_chance" : {"$lt" : chance}
#         })
#     for i in cursor:
#         pp.pprint(i)
#         print()
               
