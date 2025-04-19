"use client"
import React, { useState } from "react";
import axios from "axios";
import { Button, Input, Label } from "@shadcn/ui";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    studentID: "",
    pin: "",
  });
  const { studentID, pin } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { studentID, pin });
      console.log("Login successful", response.data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="studentID">Student ID</Label>
          <Input
            type="text"
            id="studentID"
            name="studentID"
            value={studentID}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="pin">Pin</Label>
          <Input
            type="password"
            id="pin"
            name="pin"
            value={pin}
            onChange={onChange}
            required
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}