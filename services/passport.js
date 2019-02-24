const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
    //user.id is actual id saved in mongodb
    done(null,user.id)
})

//id will search through all our mongodb hosted in cloud
//create a user model instance
passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(user =>{
            done(null,user)
        })
})


passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy : true
    }, (accessToken, refreshToken, profile, done)=>{
        User.findOne({googleID : profile.id})
            .then(existingUser =>{
                if(existingUser){
                    //we found existing user
                    done(null,existingUser)
                }else{
                    new User({
                        googleID: profile.id,
                        name: profile.displayName
                    }).save()
                        .then(user => done(null,user));
                }
            })
        
    })
)
