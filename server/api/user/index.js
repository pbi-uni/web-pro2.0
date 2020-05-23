const controller=require('./user.controller')
const passport=require('passport')
const auth = require('../../middleware/auth');
const upload = require('../../middleware/profilePic')
const express = require('express');
const router = express.Router();


router.get('/me',auth.checkToken, controller.viewProfile);
router.post('/signUp', controller.create);
router.post('/logIn', passport.authenticate('local',{ session: false }), controller.login);
router.get('/google-signIn', passport.authenticate('google', {
    failureRedirect: '/signUp',
    
    scope: [
      'profile',
      'email'
    ],
    session: false
  }))
router.get('/google-signIn/callback', passport.authenticate('google', {
    failureRedirect: '/signUp',
    session: false
  }), (req,res)=>{
      res.send(req.user)
  });
  router.post('/me/avatar',upload.single('avatar'),auth.checkToken, controller.uploadPic)
  router.get('/me/avatar',auth.checkToken, controller.getPic)
  
  module.exports = router; 