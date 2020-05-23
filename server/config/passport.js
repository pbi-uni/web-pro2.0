const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const GoogleStrategy=require('passport-google-oauth').OAuth2Strategy
const bcrypt = require('bcrypt');
const {User, validate} = require('../api/user/user.model');
const config = require('./config');

const localLogin = new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
    console.log(email)
  let user = await User.findOne({email: email});
  console.log(user)
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return done(null, false, { error: 'Your login details could not be verified. Please try again.' });
  }
  user = user.toObject();
  delete user.password;
  done(null, user);
});


const jwtLogin = new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}, async (payload, done) => {
  let user = await User.findById(payload._id);
  if (!user) {
    return done(null, false);
  }
  user = user.toObject();
  delete user.hashedPassword;
  done(null, user);
});

passport.use(jwtLogin);
passport.use(localLogin);

passport.serializeUser((user,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>
    {
        done(null,user)
    })
})

  passport.use(new GoogleStrategy({
    clientID:'206340920998-icgbaet732sf6fqknkc12rej4n963ld4.apps.googleusercontent.com',
    clientSecret: 'Dus9gfCyt8IFtFvt10dref0P',
    callbackURL: '/api/user/google-signIn/callback'
  },
  async function(accessToken, refreshToken, profile, done) {
    User.findOne({
      'googleId': profile.id
    })
      .then(user => {
        if (user) {
          return done(null, user);
        }
        console.log(profile)
        user = new User({
          firstName: profile.displayName,
          email: profile.emails[0].value,
          mobileNo:'9464901099',
          dob:'2010-05-16',
          password:'9464901099',
          userName: profile.emails[0].value.split('@')[0],
          googleId:profile.id
        });
        user.save()
          .then(user => done(null, user))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));

  module.exports = passport;

