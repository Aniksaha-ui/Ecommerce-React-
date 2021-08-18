const express=require('express');
const router = express.Router();

const{newOrder,
    getSingleOrder,
    myOrder,
    allOrders
    } =require('../controller/orderController')
const { isAuthenticatedUser,authorizeRoles} = require('../middlewares/auth');


router.route('/order/new').post(isAuthenticatedUser,newOrder);
router.route('/orders/:id').get(isAuthenticatedUser,getSingleOrder);
router.route('/order/all').get(isAuthenticatedUser,authorizeRoles('admin'),allOrders);
router.route('/order/me').get(isAuthenticatedUser,myOrder);



module.exports= router;