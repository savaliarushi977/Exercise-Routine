import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import API from '../api/api';

const HomePage = () => {
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [routine, setRoutine] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/exercise/setPreferences', {
        fitnessLevel,
        fitnessGoal
      });
      setRoutine(res.data.routine);
    } catch (err) {
      console.error('Error fetching routine:', err.response?.data || err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-start px-4 pt-10 pb-20">
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
            Set Your Preferences
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Dropdown
              label="Fitness Level"
              value={fitnessLevel}
              onChange={(e) => setFitnessLevel(e.target.value)}
              options={['Beginner', 'Intermediate', 'Advanced']}
            />
            <Dropdown
              label="Fitness Goal"
              value={fitnessGoal}
              onChange={(e) => setFitnessGoal(e.target.value)}
              options={['Weight Loss', 'Muscle Gain', 'General Fitness']}
            />
            <button
              type="submit"
              className="w-full py-3 text-black font-semibold bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
            >
              Get My Routine
            </button>
          </form>
        </div>

        {routine.length > 0 && (
          <div className="mt-10 w-full max-w-3xl">
            <h3 className="text-2xl font-bold text-center text-indigo-700 mb-6">Your Weekly Routine</h3>
            {routine.map((day) => (
              <div key={day.day} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{day.day}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {day.exercises.map((ex, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                      {ex.mediaUrl && (
                          <img
                          src={ex.mediaUrl.includes('drive.google.com') 
                            ? ex.mediaUrl.replace('/file/d/', '/uc?export=view&id=').replace('/view?usp=sharing', '') 
                            : ex.mediaUrl
                          }
                          alt={ex.name}
                          className="h-32 object-cover mb-2 rounded"/>
                      )}
                      <h5 className="font-semibold">{ex.name}</h5>
                      <p className="text-sm text-gray-600">{ex.sets} sets x {ex.reps} reps</p>
                      <p className="text-xs text-gray-400">{ex.bodyPart}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;