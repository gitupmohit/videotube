// require('dotenv').config()
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
  path:"/"
})

connectDB()

// ; (async()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//   } catch (error) {
//     console.error("Error",error)
//     throw error
//   }
// })()