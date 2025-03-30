import express from "express"; 
import dotenv from "dotenv"; 
import cors from "cors"; 
import connectDB from "./config/db.js";
import  exerciseRoute  from "./routes/exerciseRoutes.js";
import authRoute from "./routes/authRoutes.js"; 


dotenv.config(); 

const app = express();

// middlewares 
app.use(express.json()); 
app.use(cors()); 

// connect db 
connectDB(); 

//routes
app.use("/api/auth", authRoute); 
app.use("/api/exercise", exerciseRoute); 



const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} Port`); 
}); 