const mongoose = require('mongoose');

async function connecTotDB() {

    try{
        await mongoose.connect(process.env.MONGO_URI)
         console.log('Connected!');
    }catch(e){
        console.log(e);
    }
    
}

module.exports = connecTotDB