import React, { useState } from "react";
import { Button, Input, Label } from "@shadcn/ui";

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Admin login with", formData);
      // Add API call for admin login
    } catch (error) {
      console.error("Admin login failed", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}