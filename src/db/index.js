const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

module.exports = connectDB;


// require("dotenv").config();
// const mongoose = require("mongoose");
// const DB_NAME = require("../constants.js");

// const connectDB = () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("Mongo DB connected");

//     // app.listen(process.env.PORT, () => {
//     //   console.log(`Port is running at ${process.env.PORT}`);
//     // });
//   } catch (error) {
//     console.error("MongoDB Connection ERROR: ", error);
//     throw error;
//   }
// };

// module.exports = connectDB;
