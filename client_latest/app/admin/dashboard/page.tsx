import React from "react";

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Meal Request Monitoring</h2>
        <p>Admins can scan student ID cards to validate eligibility.</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Budgeting and Financial Monitoring</h2>
        <p>Track costs, revenues, and profits in real-time.</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Meal Tracking</h2>
        <p>Monitor meal statistics, including the number of meals served and remaining funds.</p>
      </div>
    </div>
  );
}