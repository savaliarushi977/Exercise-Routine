// hold the information regarding the user 

// has 5 params : name, email, password, fitness Level, fitness Goal

import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fitnessLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default : null
  },
  fitnessGoal: {
    type: String,
    enum: ['Weight Loss', 'Muscle Gain', 'General Fitness'],
    default : null
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User; 