const express = require('express');
const router = express.Router(); 

const {
    registerUser,
    deleteUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserProfile,
    updateProfile,
    allUsers,
    getUserDetails,
    updateUser,
    updatePassword} = require('../controller/authController');
const { isAuthenticatedUser,authorizeRoles} = require('../middlewares/auth');
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);


router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/password/update').put(isAuthenticatedUser,updatePassword);
router.route('/me').get(isAuthenticatedUser,getUserProfile);
router.route('/me/update').put(isAuthenticatedUser,updateProfile);
router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('admin'),allUsers);
router.route('/admin/users/:id')
      .get(isAuthenticatedUser,authorizeRoles('admin'),getUserDetails)
      .put(isAuthenticatedUser,authorizeRoles('admin'),updateUser)
      .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteUser);
router.route('/logout').get(logout);


module.exports = router;

