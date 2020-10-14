db.amigos.find()
db.amigos.find( {}  ).pretty()
db.amigos.find( {"edad": 22}   ).pretty()
db.amigos.find({"edad": { $gt:20 }}).pretty()
/* Nos devuelve:
{
        "_id" : ObjectId("5f86ec32d751bbde5981be5a"),
        "nombre" : "Juan",
        "apellidos" : "Sánchez Pérez",
        "edad" : 20
}
{
        "_id" : ObjectId("5f86ec33d751bbde5981be5f"),
        "nombre" : "Juan",
        "apellidos" : "Sánchez Pérez",
        "edad" : 20
}
*/