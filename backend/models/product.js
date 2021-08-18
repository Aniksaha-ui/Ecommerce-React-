const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
    type:String,
    required:[true,'please enter product name'],
    trim:true,
    maxLength:[100,'product name cannot exceed 100 char']    
},
price:{
    type:Number,
    required:[true,'please enter product name'],
    maxLength:[5,'product name cannot exceed 100 char'],
    default:0.0    
},

description:{
    type:String,
    required:[true,'please enter product Description'],
       
},
rating:{
    type:Number,
    default:0       
},
images:[
    {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        },
    } 
],
category:{
    type:String,
    required:[true, 'please select category'],
    enum:{
        values:[
            'Electronic',
            'camara',
            'Laptop',
            'Accessories',
            'Headphone',
            'Food',
            'Books',
            'Cloths/shoes',
            'Beauty/Health',
            'Sports',
            'Outdoor',
            'Home'
        ],
        message:'please select correct category for product'
    }
},
seller:{
    type:String,
    required:[true,'Please enter product seller']
},
stock:{
    type:Number,
    required:[true,'please enter product stock'],
    maxLength:[5,'Product stock cannot exceed 5 characters'],
    default:0
},
numOfReviews:{
    type:Number,
    default:0
}, 
reviews:[
    {
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comments:{
            type:String,
            required:true
        }
    }
],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }

})




module.exports=mongoose.model('Product',productSchema);