// Use the correct 'use client' directive if you're working within a specific framework requiring it.
'use client';
import React, { useState } from 'react';
import { tempQuotes } from './fuel_history'; // Adjust this import path as necessary
import Link from "next/link";
import { useRouter } from "next/navigation"; // Corrected import for useRouter

export default function FuelQuoteForm() {
  const router = useRouter(); // Now correctly imported from 'next/router'
  const [gallonsRequested, setGallonsRequested] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState(
    tempQuotes.length > 0 ? tempQuotes[0].deliveryAddress : ''
  );
  const [suggestedPricePerGallon] = useState(1.50); // Assuming this value is constant for demonstration
  const [deliveryDate, setDeliveryDate] = useState('');
  const [error, setError] = useState("");

  const loginAPI = () => {
    // Check if any of the required fields are empty
    if (!gallonsRequested || !deliveryAddress || suggestedPricePerGallon === 0 || !deliveryDate) {
      setError('Invalid - all fields are required.');
      return; // Prevent form submission if validation fails
    }

    console.log("Delivery Address:", deliveryAddress);
    console.log("Gallons Requested:", gallonsRequested);
    console.log("Delivery Date:", deliveryDate);
    console.log("Suggested Price:", suggestedPricePerGallon);

    // Here, implement your API call or routing logic
    // For demonstration, we're just clearing the error
    setError('');

    // Optionally, navigate to another page on successful API call/submission
    // router.push('/successPage'); // Uncomment or adjust as needed
  };

  // Extract unique addresses from tempQuotes to populate the dropdown
  const uniqueAddresses = Array.from(new Set(tempQuotes.map(quote => quote.deliveryAddress)));

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
        <h1 className="text-xl font-bold my-5">Fuel Quote Form</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginAPI();
          }}
          className="flex flex-col gap-3"
        >
          <label htmlFor="gallonsRequested" className="font-bold">Gallons Requested:</label>
          <input
            id="gallonsRequested"
            type="number"
            value={gallonsRequested}
            onChange={(e) => setGallonsRequested(e.target.value)} // Keep as string to allow for empty state
            className="rounded-md"
            required // Ensures the user cannot submit the form without filling out this field
          />
          <label htmlFor="DeliveryAddress" className="font-bold">Delivery Address:</label>
          <select
            id="DeliveryAddress"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            className="rounded-md"
            required
          >
            {uniqueAddresses.map((address, index) => (
              <option key={index} value={address}>
                {address}
              </option>
            ))}
          </select>

          <label htmlFor="SuggestedGallonPrice" className="font-bold">Suggested Gallon Price:</label>
          <input
            id="SuggestedGallonPrice"
            type="text"
            value={`$${suggestedPricePerGallon.toFixed(2)}`}
            readOnly
            className="rounded-md"
          />

          <label htmlFor="DeliveryDate" className="font-bold">Delivery Date:</label>
          <input
            id="DeliveryDate"
            onChange={(e) => setDeliveryDate(e.target.value)}
            type="date"
            value={deliveryDate}
            className="rounded-md"
            required
          />
          <button
            className="bg-purple-600 text-white font-bold cursor-pointer px-6 py-2 rounded-md hover:bg-purple-700 mt-4"
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
      </div>
    </div>
  );
}
