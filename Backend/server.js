require('dotenv').config()
const app = require('./src/app.js');
const connectToDB = require('./src/config/databaseConnect.js')
const invokeGeminiAi = require('./src/services/ai.services.js')

connectToDB()
app.listen(3000,()=>{
    console.log("App is running on port 3000")
})