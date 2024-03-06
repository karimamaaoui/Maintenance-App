const express = require('express');
const app = express()
const mongoose = require('mongoose');
const demande = require ("./models/Demandes");
const Demande = require('./models/Demandes');

app.use(express.json())


// routes:

app.post('/demande', async (req,res) =>{
    try{
        const demande = await Demande.create(req.body)
        res.status(200).json(demande)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message : error.message})
    }
    
})


mongoose.connect('mongodb+srv://maaouika07:maitenancepwd@cluster0.sgz7msq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    app.listen(3000, ()=> {
        console.log("Server is running on port 3000")
    })
    console.log("Conncted to Mongodb")
}).catch((error) =>{
    console.log(error)
})