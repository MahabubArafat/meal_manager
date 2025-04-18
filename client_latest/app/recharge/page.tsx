import React, { useState } from "react";
import { Button, Input, Label } from "@shadcn/ui";

export default function RechargePage() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Recharging with", { amount, paymentMethod });
      // Add API call to recharge balance
    } catch (error) {
      console.error("Recharge failed", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recharge</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="paymentMethod">Payment Method</Label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="cash">Cash</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
          </select>
        </div>
        <Button type="submit">Recharge</Button>
      </form>
    </div>
  );
}