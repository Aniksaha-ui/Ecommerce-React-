const Product = require('../models/product');
//this is for if we have to show any error massage
const ErrorHandler = require('../utils/errorHandler')

//it is for if any required field is missing
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
//it is for if any required field is missing finished

const APIFeatures = require('../utils/apiFeatures')

//Create New Product => /api/v1/product/new
exports.newProducts = catchAsyncErrors(async (req,res,next)=>{

    req.body.user = req.user.id;
    
    const product = await Product.create(req.body);
    
    res.status(201).json({
        success: true,
        product
    })
})


//get all products 
exports.getProducts = catchAsyncErrors(async (req,res,next)=>{
    
    //return next(new ErrorHandler('My Error',400))

    const resPerPage = 16;
    const productsCount = await Product.countDocuments();
    //console.log(Product.find());
    const apiFeatures = new APIFeatures(Product.find(),req.query)
                        .search()
                        .filter()
                        .pagination(resPerPage)

    const products = await apiFeatures.query;
    
    //console.log(products);
        setTimeout(()=>{
            res.status(200).json({
                success:true,
                count:products.length,
                productsCount,
                products
            })
        },2000)

})


//get a single product
exports.getSingleProduct = catchAsyncErrors(async (req,res,next) =>{
    const product = await Product.findById(req.params.id);
   
    if(!product){
        return next(new ErrorHandler('Product not found',404));
    }

    res.status(200).json({
        success:true,
        product
    })

})


//Update Product

exports.updateProduct =catchAsyncErrors(async (req,res,next)=>{
    let product = await Product.findById(req.params.id);

    // console.log(req.params.id);
    // console.log(req.body);
    

    if(!product){
        return res.status(404).json({
            success:false,
            message:'product not found'
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

  

    res.status(200).json({
        sucess:true,
        product
    })

})


exports.deleteProduct = async(req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler('Product not found',404));
    }

    await Product.remove(product);
    res.status(200).json({
        success:true,
        message:"Product deleted Succesfully"
    })


}
