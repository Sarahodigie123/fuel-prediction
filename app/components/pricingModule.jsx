"use client";
import React, { Component } from 'react';

class PricingModule extends Component {
  constructor(props) {
    super(props);
    // initialize base values
    this.state = {
      price: null,
      error: null
    };
  }

  componentDidMount() {
    // Initiate price fetch when component mounts
    this.fetchPrice();
  }

  // Fetch price from back end using calculation that will be recieved in next assignment
  fetchPrice() {
    const { deliveryDate, gallons } = this.props;
    fetch('/calculatePrice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ deliveryDate, gallons })
    })
    .then(response => {
      // Check if response is not between 200 - 299 (ok statuses)
      if (!response.ok) {
        // Initiate error state 
        this.setState({ error: 'Network response was not ok' });
        return;
      }
      // Parse json response otherwise
      response.json().then(this.handleResponse).catch(this.handleError);
    })
    .catch(this.handleError); // Catch any fetch errors
  }

  // for successful responses
  handleResponse(data) {
    // Set price state and clear error
    this.setState({ price: data.price, error: null });
  }
  // for non successful responses lol
  handleError(error) {
    this.setState({ error: error.message, price: null });
  }

  render() {
    const { price, error } = this.state;

    return (
      <div>
        <h2>Pricing Module</h2>
        {/* show errors if present */}
        {error && <p>Error: {error}</p>}
        {price !== null && <p>Price: ${price}</p>}
      </div>
    );
  }
}

export default PricingModule;
