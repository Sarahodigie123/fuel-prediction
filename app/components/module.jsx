'use client';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { gallonsRequested } from './FuelQuoteForm';
import { tempQuotes } from './fuel_history';
export default function FuelQuoteForm() {

  const router = useRouter();
  const gallon = gallonsRequested;
  const listedPrice = 15;
  const location = 'TX';
  if (location == 'TX') {
    locationFactor = .02;
  } else {
    locationFactor = .04;
  }
  const profitFactor = .1;
  const rateHistoryFactor = 0.1;
  // Rate History Factor = 1% if client requested fuel before, 0% if no history (you can query fuel quote table to check if there are any rows for the client)
  // Gallons Requested Factor = 2% if more than 1000 Gallons, 3% if less
  if (gallonsRequested > 1000) {
    gallonsRequestedFactor = .02;
  } else {
    gallonsRequestedFactor = .03;
  }
  const margin = listedPrice * (locationFactor - rateHistoryFactor + gallonsRequestedFactor + profitFactor);
  // Margin =  Current Price * (Location Factor - Rate History Factor + Gallons Requested Factor + Company Profit Factor)
  const pricegiven = 15 * margin;
  const price = gallon * pricegiven; //hard coded for now
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
          <Link href="/FuelQuoteForm">
            <span className="text-sm mt-3 text-right cursor-pointer underline">
              Go Back to Fuel Quote Form
            </span>
          </Link>
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
