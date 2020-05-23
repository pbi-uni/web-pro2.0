
const bcrypt = require('bcrypt');
const _ = require('lodash');
const sharp = require('sharp')
const {User, validate} = require('../user/user.model');

const express = require('express');

 
async function viewProfile(req,res)
{
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
}



 async function  create(req, res) {
    
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');
  
    user = new User(_.pick(req.body, ['firstName','lastName', 'email', 'password','userName','mobileNo','dob']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
  
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
   
  }

  async function login(req, res) {
    let user = await User.findOne({ email: req.body.email });
//    let user=new User(us)
   const token = user.generateAuthToken();
    // res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
    res.header('x-auth-token', token).send({token});
  }

  async function uploadPic(req, res) {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    const user = await User.findById(req.user._id)
    user.avatar = buffer
    await user.save()
    res.send()
  }


  exports.login=login
  exports.create=create
  exports.viewProfile=viewProfile
  exports.uploadPic=uploadPic
  exports.getPic=async (req, res) => {
    try {
        const user = await User.findById(req.user._id)

        if (!user || !user.avatar) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(user.avatar)
    } catch (e) {
        res.status(404).send()
    }
}