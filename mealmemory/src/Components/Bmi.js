import React from "react";
import { useState } from "react";
import '../Styles/Bmi.css'

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [calories, setCalories] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [proteins, setProteins] = useState(null);
  const [fats, setFats] = useState(null);

  const calculateCalories = () => {
    let calorieIntake;

    if (gender === "male") {
      calorieIntake = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calorieIntake = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const carbIntake = (calorieIntake * 0.4) / 4;
    const proteinIntake = (calorieIntake * 0.3) / 4;
    const fatIntake = (calorieIntake * 0.3) / 9;

    setCalories(calorieIntake);
    setCarbs(carbIntake);
    setProteins(proteinIntake);
    setFats(fatIntake);
  };

  return (
    <div className="background">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-4">
        Calorie and Macronutrient Calculator
      </h1>
      <div className="mb-4">
        <label className="block mb-2">
          Weight (kg):
          <input
            className="border border-gray-300 rounded px-4 py-2 w-full"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Height (cm):
          <input
            className="border border-gray-300 rounded px-4 py-2 w-full"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Age (years):
          <input
            className="border border-gray-300 rounded px-4 py-2 w-full"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Gender:
          <select
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={calculateCalories}
      >
        Calculate
      </button>

      {calories && (
        <div className="mt-4 text-white p-4">
          <h2 className="text-2xl font-bold mb-2">Results</h2>
          <p className="text-xl">Calories/day: {calories.toFixed(2)}</p>
          <p className="text-xl">Carbohydrates: {carbs.toFixed(2)} grams/day</p>
          <p className="text-xl">Proteins: {proteins.toFixed(2)} grams/day</p>
          <p className="text-xl">Fats: {fats.toFixed(2)} grams/day</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Bmi;
