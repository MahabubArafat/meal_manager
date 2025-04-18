import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">
          <Link href="/">Meal Manager</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/recharge">Recharge</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
          <li>
            <Link href="/admin/login">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;