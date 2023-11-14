const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    title: { 
        type: String, 
        required: true,
        unique: true, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider',
        required: true
    }
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);


// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

//crear producto





// Insertar un producto

// const p = new Product({
//     id: 9,
//     title: "Croquetas",
//     price: 1.80,
//     description: "cosas muy ricas para comer",
//     image:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.jpg"
// });

// // Guardar en la BBDD
// p.save()
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))

// Product.find({}).then(data=>console.log(data)); 



module.exports = Product;