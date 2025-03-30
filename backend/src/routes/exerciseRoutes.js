import express from "express";
import { exerciseController } from "../controllers/exerciseController";

const router = express.Router();

router.post("/", exerciseController); 

export default router ; 
