// exercise controller 
import User from '../models/User.js';
import Routine from '../models/Routine.js';
import Exercise from '../models/Exercise.js';

export const setPreferences = async (req, res) => {
  try {
    const userId = req.user.id;
    const { fitnessLevel, fitnessGoal } = req.body;

    // updating the user info based on the preferences 
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { fitnessLevel, fitnessGoal },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    // finding the week routine for the user 
    const template = await Exercise.findOne({ fitnessLevel, fitnessGoal });
    if (!template) return res.status(404).json({ message: 'No routine found' });

    // connecting the user with the routine made for him 
    await Routine.findOneAndUpdate(
      { userId },
      { templateId: template._id },
      { upsert: true, new: true }
    );

    // Send the routine directly with embedded mediaUrl
    return  res.status(200).json({
      message: 'Routine assigned successfully!',
      routine: template.weekRoutine
    });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};