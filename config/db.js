const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Chandi-27:Chandi@cluster0.tjhsdwq.mongodb.net/BookStore_Management');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})