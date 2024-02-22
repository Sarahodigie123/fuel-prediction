"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginAPI = () => {
    // This is where you would call your login API
    // For this example, I'll just log the email and password
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
        <h1 className="text-xl font-bold my-4">Please Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginAPI();
          }}
          className="flex flex-col gap-3"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-purple-600 text-white font-bold cursor-pointer px-6 py-2"
            type="submit"
          >
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link href="/register">
            <span className="text-sm mt-3 text-right cursor-pointer underline">
              Don't have an account? Register
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}
