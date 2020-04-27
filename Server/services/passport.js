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
    (accessToken, refreshToken,profile,done) => {
        User.findOne({googleId: profile.id})
        .then(existingUser=>{
            if(existingUser){
                //we already have a recordwith the given profile id
               //telling pasport to proceed with authentication
                done(null, existingUser);
            }
            else{
                //creating a new user and saving it to the db
                 //initialising an asynchronous function 
                new User ({ googleId: profile.id})
                .save()
                .then(user =>done(null, user));
                
            }
        })
       
        
     }
    )
);  

