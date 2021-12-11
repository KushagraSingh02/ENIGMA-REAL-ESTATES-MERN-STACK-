const moongose = require('mongoose')


const mongoURI = "mongodb://localhost:27017/project?readPreference=primary&appname=MongoDB%20Compass&ssl=false"


const connectToMongo = ()=>{

    moongose.connect(mongoURI,()=>{

        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo;