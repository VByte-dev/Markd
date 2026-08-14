const mongoose  = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  try{
    mongoose.connect(process.env.MONGO_URI);
    console.log("Markd database is created");
  }catch(err){
    console.log(`Something went wrong: ${err}`);
  }
}

module.exports = connectDB;