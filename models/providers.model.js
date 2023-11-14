const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true 
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true  
    },
    adress: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String,
        required: true,
        validate: {
            validator: function(url){
                if(url.indexOf("http://www.") != -1 || url.indexOf("https://www.") != -1)
                    return true;
                else {
                    return false;
                }
            }, 
            message: "Introdude un web válida por favor"
        }
    }
};
// Crear el esquema
const providersSchema = mongoose.Schema(objectSchema);


// Crear el modelo --> Colección
const Provider = mongoose.model('Provider', providersSchema);

module.exports = Provider;


// Insertar un producto

// const p = new Provider({   
//     id: 4, 
//     company_name: "Teatro Marquina",
//     CIF: "B40236882",
//     adress: "Calle de Prim 11",
//     url_web:"https://www.tortillasmarquina.com"
// });

// // Guardar en la BBDD
// p.save()
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))

// Provider.find({}).then(data=>console.log(data)); 