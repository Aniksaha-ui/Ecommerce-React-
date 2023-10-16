const Product = require("../models/product");
const Category = require("../models/category");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const products = require("../data/product.json");
const category = require("../data/category.json");

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

// const seedProducts = async () => {
//   try {
//     await Product.insertMany(products);
//     console.log("Products Insert Succesfully");
//     process.exit();
//   } catch (error) {
//     console.log(error.message);
//     process.exit();
//   }
// };
// seedProducts();

const seedCategory = async () => {
  try {
    await Category.insertMany(category);
    console.log("Category Insert Succesfully");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
seedCategory();
