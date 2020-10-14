/*
Insertamos un documento en la colección amigos
tendremos que hacer previamente un:
 use bd
 para posicionarlos o usar una base de datos concreta
*/
db.amigos.insertOne({ 
    "nombre": "Juan", // Entre comillas es string
    "apellidos": "Sánchez Pérez",
    "edad": 20  // Sin comillas es numérico
})
db.amigos.insertOne({ 
    "nombre": "Federico",
    "apellidos": "López Fernández",
    "edad": 22
})
db.amigos.insertOne({ 
    "nombre": "Juan", // Entre comillas es string
    "apellidos": "Sánchez Pérez",
    "edad": 21  // Sin comillas es numérico
})
db.amigos.insertOne({ 
    "nombre": "Federico",
    "apellidos": "López Fernández",
    "edad": 19
})
db.amigos.insertOne({ 
    "nombre": "Federico",
    "apellidos": "López Fernández",
    "edad": 18
})
db.amigos.insertOne({ 
    "nombre": "Juan", // Entre comillas es string
    "apellidos": "Sánchez Pérez",
    "edad": 20  // Sin comillas es numérico
})
db.amigos.insertOne({ 
    "nombre": "Federico",
    "apellidos": "López Fernández",
    "edad": 23
})
db.amigos.insertOne({ 
    "nombre": "Juan", // Entre comillas es string
    "apellidos": "Sánchez Pérez",
    "edad": 16  // Sin comillas es numérico
})
db.amigos.insertOne({ 
    "nombre": "Federico",
    "apellidos": "López Fernández",
    "edad": 17
})
db.amigos.insertOne({ 
    "nombre": "Federico",
    "apellidos": "López Fernández",
    "edad": 24
})
