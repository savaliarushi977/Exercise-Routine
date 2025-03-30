// database connection file 
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const connectDB = async () => {
    try{    
        // connect to cloud server 
        await mongoose.connect(process.env.MONGO_URL); 
        console.log("Database connection successfull!!"); 
    }catch(err){
        console.error("Database connection failed : ",err); 
        process.exit(1); // problem in connecting the databse 
    }
} 

export default connectDB; 


