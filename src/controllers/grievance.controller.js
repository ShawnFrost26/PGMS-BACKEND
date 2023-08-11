const Grievance = require("../models/grievance.model");
const grievanceService = require("../services/grievance.service");

const createGrievance = async (req, res) => {
  try {
    const grievanceData = req.body;
    const newGrievance = await grievanceService.createGrievance(grievanceData);
    console.log("in controller--createGrievance--newGrievance", newGrievance);
    res
      .status(201)
      .json({
        message: "Grievance submitted successfully",
        grievance: newGrievance,
      });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit grievance", error });
  }
};

const getAllGrievances = async (req, res) => {
  try {
    const grievances = await grievanceService.getAllGrievances();
    console.log("in controller--getAllGrievances--grievance", grievances);

    res.json({ grievances });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch grievances" });
  }
};

const grievanceController = {
  searchGrievances: async (req, res) => {
    try {
      const patientId = req.params.patientId;
      const grievances = await grievanceService.searchByPatientId(patientId);
      console.log("in controller--grievanceController--grievances", grievances);

      res.status(200).json(grievances);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = {
  createGrievance,
  getAllGrievances,
  grievanceController,
};
