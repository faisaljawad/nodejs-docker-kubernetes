// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Billing Service");
});

// ! BILLINGS CRUD OPERATIONS


app.post("/billing", (req, res) => {
  console.log("Request received in billing-service with data:", req.body);
  res.send(req.body);
});

const PORT = 5007; // Update the port to 5007

app.listen(PORT, () => {
  console.log(`Billing service running on port ${PORT}`);
});
