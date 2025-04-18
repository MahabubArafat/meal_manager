import React, { useState } from "react";
import axios from "axios";
import { Button } from "@shadcn/ui";

export default function TakeMealPage() {
  const [message, setMessage] = useState("");

  const takeMeal = async () => {
    try {
      const response = await axios.post("/api/meal/newmeal");
      setMessage(response.data.message || "Meal taken successfully");
    } catch (error) {
      console.error("Error taking meal", error);
      setMessage("Failed to take meal");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Take a Meal</h1>
      {message ? (
        <p className="text-green-500">{message}</p>
      ) : (
        <Button onClick={takeMeal}>Take Meal</Button>
      )}
    </div>
  );
}