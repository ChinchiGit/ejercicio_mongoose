const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');


router.get("/", productsController.getProducts);
router.post("/", productsController.createProduct);
router.put("/", productsController.updateProduct);
router.delete("/", productsController.deleteProduct);

module.exports = router;