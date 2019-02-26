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


//using promises by async await syntex
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy : true
    },
    async (accessToken, refreshToken, profile, done) =>{
       const existingUser = await User.findOne({googleID : profile.id}) 
                if(existingUser){
                    //we found existing user
                return    done(null,existingUser)
                }
               
                  const user = await  new User({
                        googleID: profile.id,
                        name: profile.displayName
                    }).save()
                     done(null,user)
                
            }
        )
        
)

