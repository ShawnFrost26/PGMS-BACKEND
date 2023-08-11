const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const authRoutes = require('./routes/auth.route');
const grievanceRoutes = require('./routes/grievance.route')

const app = express();

// Set security HTTP headers - https://helmetjs.github.io/
app.use(helmet());

// Parse JSON request body
app.use(express.json());

// Parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Gzip compression
app.use(compression());

// Enable CORS
app.use(cors());
app.options('*', cors());

// Reroute all API requests starting with "/" route
app.use('/api/auth', authRoutes);
app.use('/api/grievance', grievanceRoutes);

module.exports = app;
