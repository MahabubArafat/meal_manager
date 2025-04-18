import React, { useState } from "react";
import { Button, Input, Label } from "@shadcn/ui";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
  });
  const { email, phoneNumber } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Updating settings with", formData);
      // Add API call to update settings
    } catch (error) {
      console.error("Settings update failed", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            required
          />
        </div>
        <Button type="submit">Update Settings</Button>
      </form>
    </div>
  );
}