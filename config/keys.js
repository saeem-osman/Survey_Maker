//keys.js - figure out what set of credential to return from here

if(process.env.NODE_ENV === 'production'){
    //we are in production environment
    module.exports = require('./prod')

} else{
    //we are in the development process
    module.exports = require('./dev')
}