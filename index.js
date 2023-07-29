const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
DB_URL='mongodb://0.0.0.0/pass'
const cors = require('cors');
//require('dotenv').config();
const mongoose = require('mongoose');
const userController=require('./controller/user')


app.use(cors())

mongoose.connect(DB_URL);

 const con= mongoose.connection; 
 try {
    con.on("open", () => {
      console.log("MongoDB connected!!!!");
    });
  } catch (error) {
    console.log("Error: " + error);
  }


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/signup',userController.signup)
app.post('/signin',userController.signin)
app.post('/submit-otp', userController.submitotp)
app.post('/send-otp', userController.sendotp)

app.listen(port, () => {
  console.log(`vandana server is at ${port}`)
})