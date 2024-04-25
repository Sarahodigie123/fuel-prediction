"use client";
import React, { useState } from 'react';
//import { tempQuotes } from './fuel_history'; // Adjust this import path as necessary
import Link from "next/link";
import { useRouter } from "next/navigation";

// Exporting tempQuotes array to be used in other components
export const tempQuotes = [
  {
    id: 1,
    gallonsRequested: 100,
    deliveryAddress: "123 Main St, City, State",
    deliveryDate: "2024-02-22",
    suggestedPricePerGallon: 2.5,
  },
  {
    id: 2,
    gallonsRequested: 150,
    deliveryAddress: "456 Elm St, City, State",
    deliveryDate: "2024-02-25",
    suggestedPricePerGallon: 2.3,
  },
];

export default function FuelQuoteHistory() {
  // useState here is not being used - you may want to consider removing or using it properly.
  const [quotes, setQuotes] = useState("");
  
  // Combine your styles into a single object to apply them correctly
  const styles = {
    table: {
      textAlign: "center",
      border: "1px solid black",
      borderCollapse: "collapse",
    },
    th: {
      background: "#D6D3F8", // Assuming a light purple background for the header to match border-purple-400
      color: "black",
      fontWeight: "bold",
      border: "1px solid black",
    },
    td: {
      border: "1px solid black",
    }
  };

  const calculateTotalAmountDue = (gallons, pricePerGallon) => {
    return (gallons * pricePerGallon).toFixed(2); // Formatting to 2 decimal places for currency
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
        <h1 className="text-xl font-bold my-5">Fuel Quote History</h1>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Gallons Requested</th>
              <th style={styles.th}>Delivery Address</th>
              <th style={styles.th}>Delivery Date</th>
              <th style={styles.th}>Price / Gallon</th>
              <th style={styles.th}>Total Amount Due</th>
            </tr>
          </thead>
          <tbody>
            {tempQuotes.map((quote) => (
              <tr key={quote.id}>
                <td style={styles.td}>{quote.gallonsRequested}</td>
                <td style={styles.td}>{quote.deliveryAddress}</td>
                <td style={styles.td}>{quote.deliveryDate}</td>
                <td style={styles.td}>${quote.suggestedPricePerGallon}</td>
                <td style={styles.td}>${calculateTotalAmountDue(quote.gallonsRequested, quote.suggestedPricePerGallon)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
