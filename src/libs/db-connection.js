const mongoose = require('mongoose');

let db;

module.exports = function laConeccion(){
    if (!db) 
        db = mongoose.connect('mongodb://localhost/test');
    
    return db; 

}