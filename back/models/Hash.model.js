const mongoose = require('mongoose');  

const HashSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true, 
    }
 } , {timestamps:true} );

module.exports = mongoose.model('Hash', HashSchema)