import React from "react";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p>Welcome to the Meal Manager system. Here you can view your meal history, balance, and statistics.</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Meal History</h2>
        <p>View a detailed log of meals accessed by the student.</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Balance Information</h2>
        <p>Displays the current balance remaining in the student's meal plan.</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Meal Plan Statistics</h2>
        <p>Displays meal consumption statistics, including average meals per week and month.</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Recharge Option</h2>
        <p>Allows students to top-up their balance using cash, credit, or debit cards.</p>
      </div>
    </div>
  );
}