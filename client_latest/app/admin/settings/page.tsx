import React, { useState } from "react";
import { Button, Input, Label } from "@shadcn/ui";

export default function AdminSettingsPage() {
  const [formData, setFormData] = useState({
    mealPlan: "",
    restrictions: "",
  });
  const { mealPlan, restrictions } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Updating admin settings with", formData);
      // Add API call to update admin settings
    } catch (error) {
      console.error("Admin settings update failed", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Settings</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="mealPlan">Meal Plan</Label>
          <Input
            type="text"
            id="mealPlan"
            name="mealPlan"
            value={mealPlan}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="restrictions">Restrictions</Label>
          <Input
            type="text"
            id="restrictions"
            name="restrictions"
            value={restrictions}
            onChange={onChange}
            required
          />
        </div>
        <Button type="submit">Update Settings</Button>
      </form>
    </div>
  );
}