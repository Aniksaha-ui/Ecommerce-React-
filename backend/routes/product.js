const express= require('express');
const router = express.Router();

const {
    getProducts,
    newProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct} =require('../controller/productController'); 


const { isAuthenticatedUser,authorizeRoles } = require('../middlewares/auth');


router.route('/products/new').post(isAuthenticatedUser,authorizeRoles('admin'),newProducts);
router.route('/product/all').get(getProducts);
router.route('/product/all/:id').get(getSingleProduct);
router.route('/admin/product/:id')
      .put(isAuthenticatedUser,authorizeRoles('admin'),updateProduct)
      .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteProduct);

module.exports=router;