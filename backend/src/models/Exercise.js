// contains 9 elements based on the fitness level and goal having weekly schedule 


// has 3 params : fitness Level , fitness Goal, WeekRoutine (array of days)

import mongoose from "mongoose"; 

const exerciseTemplateSchema = new mongoose.Schema({
  fitnessLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  fitnessGoal: {
    type: String,
    enum: ['Weight Loss', 'Muscle Gain', 'General Fitness'],
    required: true
  },
  weekRoutine: [
    {
      day: { type: String, required: true }, // Monday, etc.
      exercises: [
        {
          name: String,
          bodyPart: String,
          sets: Number,
          reps: Number,
          mediaUrl: String
        }
      ]
    }
  ]
}, {
  timestamps: true
});



const Exercise = mongoose.model('Exercise', exerciseTemplateSchema);
export default Exercise; 