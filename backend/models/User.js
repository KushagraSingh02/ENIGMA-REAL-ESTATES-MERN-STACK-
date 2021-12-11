const mongoose = require('mongoose')
const { Schema } = mongoose;

//Schema gives us the organised way how we want to store data in the database

const UserSchema =  new Schema ({

    name :{

        type : String ,
        requried : true // tells that this field is mandatory
    },

    email:{
        type : String,
        requried : true,
        unique : true //checks if the email id is unique in the database
    },

    password :{

        type: String ,
        requried: true
    },

    date :{
        type :Date,
        default : Date.now
    },

});


const User = mongoose.model('user',UserSchema); //parameters = database name , schema

module.exports = User;
