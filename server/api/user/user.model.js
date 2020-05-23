const config = require('../../config/config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        default: "Anonymous"
        //  required: true
    },
    lastName: {
        type: String,
        trim: true,

        // required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true,
        lowercase: true
    },
    dob: {
        type: Date,
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
        // trim: true
    },
    userName: {
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    googleId:{
        type:String
    },
    avatar: {
        type: Buffer
    }
});




userSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id, role: 'user'}, config.jwtSecret,{
        expiresIn: 60 * 60 * 5
      });
    return token;
  }
  
  const User = mongoose.model('User', userSchema);
  
  function validateUser(user) {
    const schema = {
      firstName: Joi.string().min(5).max(50).required(),
      lastName: Joi.string(),
      email: Joi.string().min(5).max(255).required().email(),
      mobileNo:Joi.string().required(),
      password: Joi.string().min(8).max(255).required(),
      dob:Joi.date(),
      userName:Joi.string().required()
    };
  
    return Joi.validate(user, schema);
  }
  
  exports.User = User; 
  exports.validate = validateUser;