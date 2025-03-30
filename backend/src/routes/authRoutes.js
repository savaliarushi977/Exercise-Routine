import express from "express"; 
import { signinController, signupController } from "../controllers/authController.js";

const router = express.Router(); 

// signup route 
router.post("/signup", signupController);

//signin route 
router.post("/signin", signinController); 

export default router; 


/*
API endpoints
1. signup => /api/auth/signup
2. signin => /api/auth/signin
*/