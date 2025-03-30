import express from "express";
import { setPreferences } from "../controllers/exerciseController.js";
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

// user sends 
router.post("/setPreferences", authMiddleware, setPreferences); 

export default router ; 

/*
	Frontend sends a POST request to /api/exercise/setPreferences with the user’s fitness level and goal.
	Auth middleware ensures the user is logged in and provides req.user.id.
	The controller:
        • Updates the user
        • Finds the matching routine
        • Saves the userId + templateId in Routine model
        • Returns the weekRoutine for UI display 
*/