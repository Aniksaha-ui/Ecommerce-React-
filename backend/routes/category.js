const express = require("express");
const router = express.Router();

const {
  getCategory,
  getSingleCategory,
  newCategory,
  deleteCategory,
  updateCategory,
} = require("../controller/categoryController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router
  .route("/category/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newCategory);
router.route("/category/all").get(getCategory);
router.route("/product/all/:id").get(getSingleCategory);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateCategory)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCategory);

module.exports = router;
