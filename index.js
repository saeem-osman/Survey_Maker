const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("HI there");
})


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Application is running on port ${PORT}`))