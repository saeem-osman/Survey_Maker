const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys')
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser')
require('./models/User')
require('./models/Survey')
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
app.use(bodyParser.json())


require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)

if(process.env.NODE_ENV === 'production'){
    //express will serve up production file
    //like our main.js file, or main.css file

    //express will serve up the index.html file
    //if it doesn't recognize the route
    app.use(express.static('client/build'));

    
    const path = require('path');
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','buile','index.html'))
    })
}

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})



const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Application is running on port ${PORT}`))