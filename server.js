const express = require('express');
const app = express()


// routes:

app.get('/',(req,res)=>{
    res.send("hello node api")
})

B=3000
app.listen(B, ()=> {
    console.log("Server is running on port", B)
})