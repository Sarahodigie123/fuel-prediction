"use client";
import Link from "next/link";
import { useState } from "react";


export default function FuelQuoteForm() {
  const gallon=2;
  const pricegiven=15;
  const price = gallon*pricegiven; //hard coded for now
  const [error, setError] = useState("");
  const loginAPI = () => {
    console.log("suggested price: ", price);


  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
        <h1 className="text-x1 font-bold my-5">Module</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginAPI();
          }}
          className="flex flex-col gap-3">
          <label htmlFor="Suggested Gallon Price:" className="font-bold"> Total Price:</label>
          <input
            type="text"
            value={`$${price}`} // Set the value attribute to the constant
            readOnly
          />
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div >
    </div >
  );
}
