const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db'); // <-- added line
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // <-- initialize DB connection

// API routes
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('REST API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
