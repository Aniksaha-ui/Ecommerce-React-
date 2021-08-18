const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'please enter your name'],
        maxLength :[30,'Your name can not excceed 30 char']
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true,
        validate:[validator.isEmail,'Please enter your email']
    },
    password:{
        type:String,
        required:[true,'Please enter your password'],
        minlength: [6,'Your password must be longer than 6 character'],
        select:false
    },
    avater:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
})

//Encripting password before saving user
userSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)

}) 

//compare user password

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
} 

//Set jwt token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id },process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    });
}


userSchema.methods.getResetPasswordToken = function(){
    
    //Genarate Token
    const resetToken = crypto.randomBytes(20).toString('hex');

    //Hash and set ResetPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    //set token expire time
    this.resetPasswordExpire = Date.now() + 30*60*1000 

    return resetToken

}

module.exports = mongoose.model('User',userSchema);