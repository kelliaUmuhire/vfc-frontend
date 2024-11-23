// /backend/server.js

const express = require('express');
const app = express();
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');  // Import the payment routes

app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

// Use the payment routes
app.use('/api', paymentRoutes);  // Prefix all payment routes with /api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
