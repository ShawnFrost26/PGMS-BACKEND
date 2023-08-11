const express = require('express');
const router = express.Router();
const grievanceController = require('../controllers/grievance.controller');
const grievanceMiddleware = require('../middlewares/grievance.middleware'); // Validation middleware

// Create a new grievance
router.post('/create', grievanceMiddleware.validateGrievance, grievanceController.createGrievance);

// Fetch all grievances (authorized route)
router.get('/all', grievanceController.getAllGrievances);

// Search grievances (authorized route)
// router.get('/search', grievanceController.searchGrievances);

module.exports = router;
