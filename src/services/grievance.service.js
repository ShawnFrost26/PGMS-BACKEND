const Grievance = require('../models/grievance.model');

const createGrievance = async (grievanceData) => {
  const newGrievance = new Grievance(grievanceData);
  console.log("in service--createGrievance--newGrievance", newGrievance);
  return newGrievance.save();
};

const getAllGrievances = async () => {
    return Grievance.find();
  };

module.exports = {
  createGrievance,
  getAllGrievances
};
