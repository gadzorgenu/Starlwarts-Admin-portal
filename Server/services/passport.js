const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const  mongoose = require('mongoose');

const User = mongoose.model('User');


//encoding the user's id  inside the id
passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done) =>{
    User.findById(id)
    .then(user =>{
        done(null, user);
    })
});

//creating a new instance of the google passport strategy
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    async (accessToken, refreshToken,profile,done) => {
      const existingUser =  await User.findOne({googleId: profile.id})
      
      if(existingUser){
            //we already have a recordwith the given profile id
            //telling pasport to proceed with authentication
             return done(null, existingUser);
        }
        //creating a new user and saving it to the db
        //initialising an asynchronous function 
        const user = await new User ({ googleId: profile.id}).save();
         done(null, user);
       }
       
    )
);  

