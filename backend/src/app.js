const express = require('express');
const cors = require('cors'); // Import the cors module
const fileRoutes = require('./routes/fileRoutes');

const app = express();
const port = 5001;

// Middleware
app.use(cors()); // Use the cors middleware
app.use(express.json());

// Routes
app.use('/upload', fileRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});