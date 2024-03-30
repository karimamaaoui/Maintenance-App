const demande = require("../models/DemandAdd");

const getDemande = async (req, res) => {
  try {
    const demands = await demande.find({ state: 'IN PROGRESS' });
    res.json(demands);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getDemande
};
