const Category = require("../models/category");
//this is for if we have to show any error massage
const ErrorHandler = require("../utils/errorHandler");

//it is for if any required field is missing
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
//it is for if any required field is missing finished

const APIFeatures = require("../utils/apiFeatures");

exports.newCategory = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const category = await Category.create(req.body);

  res.status(201).json({
    success: true,
    category: category,
  });
});

//get all products
exports.getCategory = catchAsyncErrors(async (req, res, next) => {
  //return next(new ErrorHandler('My Error',400))

  const resPerPage = 2;
  const categoryCount = await Category.countDocuments();
  //console.log(Product.find());
  const apiFeatures = new APIFeatures(Category.find(), req.query)
    .search()
    // .filter()
    .pagination(resPerPage);

  const categories = await apiFeatures.query;

  //console.log(products);
  
    res.status(200).json({
      success: true,
      count: categories.length,
      categoryCount: categoryCount,
      categories: categories,
    });
 
});

//get a single product
exports.getSingleCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorHandler("category not found", 404));
  }

  res.status(200).json({
    success: true,
    category: category,
  });
});

//Update Product

exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
  let category = await Category.findById(req.params.id);

  // console.log(req.params.id);
  // console.log(req.body);

  if (!category) {
    return res.status(404).json({
      success: false,
      message: "product not found",
    });
  }
  category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    sucess: true,
    category: category,
  });
});

exports.deleteCategory = async (req, res, next) => {
  let category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorHandler("category not found", 404));
  }

  await Category.remove(category);
  res.status(200).json({
    success: true,
    message: "category deleted Succesfully",
  });
};
