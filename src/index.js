import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Connect to the database
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000  , ()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MongoDB connection ailed !!!" , err )
})


