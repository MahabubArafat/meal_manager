import React from "react";
import { Button, Input, Label } from "@shadcn/ui";

export default function AdminReportsPage() {
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Generating reports");
      // Add API call to generate reports
    } catch (error) {
      console.error("Report generation failed", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Reports</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="startDate">Start Date</Label>
          <Input type="date" id="startDate" name="startDate" required />
        </div>
        <div>
          <Label htmlFor="endDate">End Date</Label>
          <Input type="date" id="endDate" name="endDate" required />
        </div>
        <Button type="submit">Generate Report</Button>
      </form>
    </div>
  );
}