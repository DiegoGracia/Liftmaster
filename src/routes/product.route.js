const express = require('express');
const router = express.Router();
const permissions = require('../utils/permissions');
const product = require('../controllers/product.controller');

router.post('/create', product.createProduct);
router.get('/get', product.getProduct);
router.get('/all', product.getAllProducts);
router.get('/one/:id', product.getProductByID);
router.put('/update/:id', product.updateProduct);
router.delete('/delete/:id', product.deleteProduct);

module.exports = router;