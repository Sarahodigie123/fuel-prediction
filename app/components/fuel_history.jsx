import React, { useState, useEffect } from 'react';

export default function FuelQuoteHistory() {


  

  const [quotes, setQuotes] = useState("");
  const styles = {
    center: {
      "text-align": "center",
      "vertical-align": "middle",
    },
    border: {
      "border": "1px solid black",
      "border-collapse": "collapse",
    },
  }

  const calculateTotalAmountDue = (gallons, pricePerGallon) => {
    return gallons * pricePerGallon;
  };

  const tempQuotes = [
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

  return (
    <div className="grid place-items-center h-screen shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
      <h1 className="text-x1 font-bold my-5">Fuel Quote History</h1>
      <table style={styles.center, styles.border}>
        <thead>
          <tr className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
            <th>Gallons Requested</th>
            <th>Delivery Address</th>
            <th>Delivery Date</th>
            <th>Price / gallon</th>
            <th>Total Amount Due</th>
          </tr>
        </thead>
        <tbody>
          {tempQuotes.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.gallonsRequested}</td>
              <td>{quote.deliveryAddress}</td>
              <td>{quote.deliveryDate}</td>
              <td>{quote.suggestedPricePerGallon}</td>
              <td>{calculateTotalAmountDue(quote.gallonsRequested, quote.suggestedPricePerGallon)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
