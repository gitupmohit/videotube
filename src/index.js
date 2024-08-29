// require('dotenv').config()
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
  path:"/"
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running at port ${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.error("MONGODB connection failed ",err)
})

// ; (async()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//   } catch (error) {
//     console.error("Error",error)
//     throw error
//   }
// })()