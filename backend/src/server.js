// const express = require('express'); // common js
import express from 'express';  // module js
import dotenv from 'dotenv'; // Importing dotenv to manage environment variables
import cors from 'cors'; // Importing CORS to handle cross-origin requests

import notesRoutes from './routes/notesRoutes.js'; // Importing the notes routes
import { connectDB } from './config/db.js';
import rateLimiter from './middlewares/rateLimiter.js';

dotenv.config(); // Load environment variables from .env file
 
const app = express();
const PORT = process.env.PORT || 3000;

//==> middleware 
app.use(express.json());
app.use(rateLimiter)
app.use(cors()); // Enable CORS for all routes

// ==> test middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} request for '${req.url}'`);
//   next(); // Call the next middleware or route handler
// })

app.use('/api/notes', notesRoutes); // Mounting the notes routes


connectDB().then(()=> {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
