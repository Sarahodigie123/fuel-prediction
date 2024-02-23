import React, { useState } from 'react';

const FuelQuoteHistory = () => {
  const [quotes, setQuotes] = useState("");

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
    <div>
      <h1>Fuel Quote History</h1>
      <table>
        <thead>
          <tr>
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

export default FuelQuoteHistory;