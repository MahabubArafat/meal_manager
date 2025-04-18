import React, { useState } from "react";
import axios from "axios";
import { Button, Input, Label } from "@shadcn/ui";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    studentID: "",
    email: "",
    phoneNumber: "",
    roomNumber: "",
    hallName: "",
    pin: "",
    confirmPin: "",
  });
  const { name, studentID, email, phoneNumber, roomNumber, hallName, pin, confirmPin } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pin !== confirmPin) {
      alert("Pins do not match");
      return;
    }
    try {
      const response = await axios.post("/api/student/register", formData);
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
        <div>
          <Label htmlFor="roomNumber">Room Number</Label>
          <Input
            type="text"
            id="roomNumber"
            name="roomNumber"
            value={roomNumber}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="hallName">Hall Name</Label>
          <Input
            type="text"
            id="hallName"
            name="hallName"
            value={hallName}
            onChange={onChange}
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
        <div>
          <Label htmlFor="confirmPin">Confirm Pin</Label>
          <Input
            type="password"
            id="confirmPin"
            name="confirmPin"
            value={confirmPin}
            onChange={onChange}
            required
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}