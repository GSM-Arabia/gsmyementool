const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sample API endpoint for services
app.get('/api/services', (req, res) => {
  res.json({ message: 'Service list' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
