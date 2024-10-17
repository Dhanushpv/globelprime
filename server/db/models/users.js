const mongoose = require('mongoose');


const users = new mongoose.Schema({
    name:{
        type : String,
    },
    email:{
        type : String,

    },
    profolio:{
        type : String,
   
    },
    user_type:{
        type :mongoose.Schema.Types.ObjectId,
        ref : "usertypes"
    },
    image :{
        type : String,
    },

});

 let add= mongoose.model("users", users);
 module.exports = add