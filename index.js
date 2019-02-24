const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys')
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./models/User')
require('./services/passport');

//cookie for authentication
app.use(
    cookieSession({
        maxAge : 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app)

mongoose.connect(keys.mongoURI)


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Application is running on port ${PORT}`))