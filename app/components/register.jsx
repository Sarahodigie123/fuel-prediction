'use client';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const isValidUsername = (email) => /^[A-Za-z0-9_-]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are necessary.");
      return;
    }

    if (!isValidUsername(email)) {
      setError("Invalid characters in the username. Please use only A-Z, 0-9, -, or _.");
      return;
    }

    try {
      const userCheckRes = await fetch(`https://api.deconfab.com/v1/authcheck`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await userCheckRes.json();

      if (user) {
        setError("User already exists.");
        return;
      }
      const registerRes = await fetch(`https://api.deconfab.com//v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (registerRes.ok) {
        const form = e.target;
        form.reset();
        router.push("/dashboard");
      } else {
        setError("User registration failed.");
      }
    } catch (error) {
      console.error("Error during registration: ", error);
      setError("Error during registration. Please try again.");
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
        <h1 className="text-xl font-bold my-4">Create an Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="UserName"
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
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/login"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}