"use client";
import Link from "next/link";
import { useState } from "react";


export default function FuelQuoteForm() {
  const deliveryAddress = "1234 Main St"; // hard coded for now
  const suggestedPricePerGallon = 1.50; //hard coded for now
  const [gallonsRequested, setGallons] = useState(0.0);
  const [error, setError] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const loginAPI = () => {
    console.log("Delivery Address:", deliveryAddress);
    console.log("Gallons Requested:", gallonsRequested);
    console.log("Delivery Date:", setDeliveryDate);
    console.log("suggested price: ", suggestedPricePerGallon);


  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
        <h1 className="text-x1 font-bold my-5">Fuel Quote Form</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginAPI();
          }}
          className="flex flex-col gap-3">
          <label htmlFor="Gallons Requested:" className="font-bold">Gallons Requested:</label>
          <input
            onChange={(e) => setGallons(e.target.value)}
            type="number"
            placeholder="Number of Gallons"
          />
          <label htmlFor="Delivery Address:" className="font-bold">Delivery Address:</label>
          <input
            type="text"
            value={deliveryAddress}
            readOnly
          />
          <label htmlFor="Suggested Gallon Price:" className="font-bold">Suggested Gallon Price:</label>
          <input
            type="text"
            value={`$${suggestedPricePerGallon}`} // Set the value attribute to the constant
            readOnly
          />

          <label htmlFor="Delivery Date:" className="font-bold">Delivery Date:</label>
          <input
            onChange={(e) => setDeliveryDate(e.target.value)}
            type="date"
            placeholder="Number of Gallons"

          />
          <button
            className="bg-purple-600 text-white font-bold cursor-pointer px-6 py-2 rounded-md hover:bg-purple-700"
            type="submit"
          >
            Submit
          </button>

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
