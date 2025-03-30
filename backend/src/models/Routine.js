// connects user to his routine based on the preference selected 

import mongoose from  "mongoose"; 

const routineSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  templateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercises', // Links to the 9 pre-defined routines
    required: true
  }
}, {
  timestamps: true
});

const Routine = mongoose.model('Routine', routineSchema);
export default Routine; 