import React, { useState } from 'react';
import { Calculator, Target, Flame, ArrowRight, MessageCircle, RefreshCw } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export default function FitnessCalculator() {
  const [heightCm, setHeightCm] = useState<number>(172);
  const [weightKg, setWeightKg] = useState<number>(72);
  const [age, setAge] = useState<number>(24);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(1.55); // Moderate exercise

  // Calculate BMI: weight (kg) / [height (m)]^2
  const heightM = heightCm / 100;
  const bmi = parseFloat((weightKg / (heightM * heightM)).toFixed(1));

  // Determine BMI Category
  let category = 'Normal Weight';
  let categoryColor = 'text-emerald-400';
  let advice = 'Great baseline! Focus on clean progressive overload and lean muscle hypertrophy.';
  
  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = 'text-amber-400';
    advice = 'Focus on calorie-surplus nutrition, high-protein diet, and heavy compound lifts at LAS VEGAS.';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
    categoryColor = 'text-amber-400';
    advice = 'Incorporate resistance training paired with high-intensity cardio intervals in our morning or evening batches.';
  } else if (bmi >= 30) {
    category = 'Obese';
    categoryColor = 'text-red-400';
    advice = 'Our certified trainers can tailor a low-impact fat loss and mobility roadmap to safely achieve your target weight.';
  }

  // BMR (Mifflin-St Jeor Formula)
  const bmr = gender === 'male'
    ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
    : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const maintenanceCalories = Math.round(bmr * activity);
  const fatLossCalories = Math.round(maintenanceCalories - 450);
  const muscleGainCalories = Math.round(maintenanceCalories + 350);

  const handleConsultWhatsApp = () => {
    const text = `Hi LAS VEGAS! I used your website Fitness Calculator. My stats: Height: ${heightCm}cm, Weight: ${weightKg}kg, BMI: ${bmi} (${category}). I want personal guidance on starting my gym training.`;
    window.open(`${GYM_DETAILS.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Health Tool</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          BMI & CALORIE <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">CALCULATOR</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          Input your details to estimate your Body Mass Index and daily caloric targets to conquer your fitness goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Input Controls (Left Column) */}
        <div className="lg:col-span-7 bg-[#0d1017] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-amber-400" />
            <span>Enter Your Measurements</span>
          </h3>

          <div className="space-y-6">
            {/* Gender Switcher */}
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-400 mb-2 block">Gender</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                    gender === 'male' 
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                      : 'bg-zinc-800/60 border-zinc-700 text-zinc-400 hover:text-white'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                    gender === 'female' 
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                      : 'bg-zinc-800/60 border-zinc-700 text-zinc-400 hover:text-white'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Height Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase text-zinc-400">Height</label>
                <span className="text-sm font-bold text-amber-400">{heightCm} cm ({(heightCm / 30.48).toFixed(1)} ft)</span>
              </div>
              <input
                type="range"
                min="130"
                max="220"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase text-zinc-400">Current Weight</label>
                <span className="text-sm font-bold text-amber-400">{weightKg} kg ({(weightKg * 2.20462).toFixed(0)} lbs)</span>
              </div>
              <input
                type="range"
                min="40"
                max="150"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Age Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase text-zinc-400">Age</label>
                <span className="text-sm font-bold text-zinc-200">{age} years</span>
              </div>
              <input
                type="range"
                min="14"
                max="80"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Activity Level */}
            <div>
              <label className="text-xs font-semibold uppercase text-zinc-400 mb-2 block">Weekly Activity Level</label>
              <select
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
                className="w-full bg-[#161a24] border border-zinc-700 text-zinc-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
              >
                <option value={1.2}>Sedentary (Little or no exercise)</option>
                <option value={1.375}>Lightly Active (Gym 1-3 days/week)</option>
                <option value={1.55}>Moderately Active (Gym 3-5 days/week)</option>
                <option value={1.725}>Very Active (Hard training 6-7 days/week)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Card (Right Column) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#131724] to-[#0d1017] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Analysis Result</span>
            
            {/* BMI Score */}
            <div className="mt-3 mb-6 p-4 rounded-xl bg-black/50 border border-white/10 text-center">
              <span className="text-xs text-zinc-400 block mb-1">Your Body Mass Index (BMI)</span>
              <div className="text-5xl font-black font-display text-white">{bmi}</div>
              <span className={`inline-block mt-2 font-bold text-sm uppercase px-3 py-1 rounded-full bg-white/5 ${categoryColor}`}>
                {category}
              </span>
            </div>

            {/* Calorie Goals Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs text-zinc-300">Daily Maintenance:</span>
                <strong className="text-sm text-zinc-100 font-bold">{maintenanceCalories} kcal/day</strong>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-xs text-emerald-300">Target for Fat Loss:</span>
                <strong className="text-sm text-emerald-400 font-bold">{fatLossCalories} kcal/day</strong>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <span className="text-xs text-amber-300">Target for Muscle Gain:</span>
                <strong className="text-sm text-amber-400 font-bold">{muscleGainCalories} kcal/day</strong>
              </div>
            </div>

            {/* Trainer Recommendation */}
            <div className="p-3 rounded-xl bg-zinc-800/60 border border-zinc-700/60 text-xs text-zinc-300 mb-6">
              <strong className="text-amber-400 block mb-1">Coach Note:</strong>
              {advice}
            </div>
          </div>

          <button
            onClick={handleConsultWhatsApp}
            className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult Coach with My Stats</span>
          </button>
        </div>
      </div>
    </section>
  );
}
