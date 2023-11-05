const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://chbuela22:IsZ0shAChfejLrNW@cluster0.ebaa3v8.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})