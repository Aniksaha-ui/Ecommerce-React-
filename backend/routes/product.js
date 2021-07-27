const express= require('express');
const router = express.Router();

const {
    getProducts,
    newProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct} =require('../controller/productController'); 



router.route('/products/new').post(newProducts);
router.route('/product/all').get(getProducts);
router.route('/product/:id').get(getSingleProduct);
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);






module.exports=router;