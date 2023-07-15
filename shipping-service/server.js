// imports
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// ! SHIPPING OPERATIONS
app.get("/shipping", (req, res) => {
  res.send("GET SHIPPING");
});

// POST /shipping endpoint
app.post("/shipping", async (req, res) => {
  const billingServiceURL = "http://billing-service:5007/billing";
  // Forward the req.body object to the billing-service
  console.log("Request Body (shipping-service):", req.body);
  console.log("Sending AXIOS Request to POST billing-service");
  try {
    const response = await axios.post(billingServiceURL, req.body);
    console.log("Response received in POST (shipping-service):", response.data);
    res.json({
      "message": "Please check console to check the data flows",
      "data_received": response.data
    });
  } catch (error) {
    console.error("Error in sending data to billing-service:", error.message);
    res.sendStatus(500);
  }
});

app.put("/shipping", (req, res) => {
  res.send("PUT SHIPPING");
});

app.delete("/shipping", (req, res) => {
  res.send("DELETE SHIPPING");
});

const PORT = 5003; // Update the port to 5003

app.listen(PORT, () => {
  console.log(`Shipping service running on port ${PORT}`);
});