// require('dotenv').config({path:})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config();

const app = express();

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.group(`Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });









// import { Express } from "express";

// const app = express()


// (async () => {
//  try{
//   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error", (error) => {
//         console.log("err:" ,error);
//         throw error
//     }) 
//     app.listen(process.env.PORT,() =>{
//         console.log(`app is listening on port ${process.env.PORT}`)
//     })
// }catch(error){
//     console.log("ERROR:",error);
//     throw err
//  }
// })()