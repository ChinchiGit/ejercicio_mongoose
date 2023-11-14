const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

const mongoose = require('./config/db_mongo');

// Middlewares
//const checkApiKey = require('./middlewares/auth_api_key');
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Rutas

const productsRoutes = require("./routes/products.routes")
const providersRoutes = require("./routes/providers.routes")

//por defecto
app.get('/', (req, res) => {
  res.send('Bienvenido a nuestra API de proveedores y productos')
})

//rutas
app.use('/products',productsRoutes);
app.use('/providers',providersRoutes);



// Para rutas no existentes
app.use('*',error404);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});