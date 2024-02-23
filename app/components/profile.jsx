"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidUsername = (email) => /^[A-Za-z0-9_-]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !fullName || !address1 || !city || !state || !zipcode) {
      setError("All fields are necessary.");
      return;
    }

    if (!isValidUsername(email)) {
      setError("Invalid characters in the username. Please use only A-Z, 0-9, -, or _.");
      return;
    }
    const form = e.target;
    form.reset();
    router.push("/dashboard");
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
        <h1 className="text-xl font-bold my-4">Profile Management</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Full Name (50 characters, required)"
          />
          <input
            onChange={(e) => setAddress1(e.target.value)}
            type="text"
            placeholder="Address 1 (100 characters, required)"
          />
          <input
            onChange={(e) => setAddress2(e.target.value)}
            type="text"
            placeholder="Address 2 (100 characters, optional)"
          />
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="City (100 characters, required)
            "
          />
          <select
            onChange={(e) => setState(e.target.value)}
            value={state}
          >
            <option value="">Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="TX">Texas</option>
            <option value="CA">California</option>
          </select>
          <input
            onChange={(e) => setZipcode(e.target.value)}
            type="text"
            placeholder="Zipcode"
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
        </form>
      </div>
    </div>
  );
}
