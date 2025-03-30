import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';

const HomePage = () => {
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected:', { fitnessLevel, fitnessGoal });
    // TODO: Connect to backend to fetch routine based on selected values
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
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
      </div>
    </>
  );
};

export default HomePage;