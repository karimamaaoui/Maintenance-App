const DemandAdd = require("../models/DemandAdd");
const StateDemand = require("../models/enums/StateDemand");

const sendDemand = async (req, res) => {
  try {
    const { state, organisation } = req.body;

    if ((!state, !organisation)) {
      return res.status(404).json({ message: "Fields required" });
    }
    const clientId = req.user;
    console.log("client id", clientId);

    const newDemand = new DemandAdd({
      state: StateDemand.INPROGRESS,
      organisation: organisation,
      client: clientId,
    });
    // Save the demand to the database
    await newDemand.save();

    res.status(201).send({message : "Demand sended successfully",demand: newDemand});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const getDemandByClient = async (req, res) => {
  try {
    const clientId = req.user; 
    const demands = await DemandAdd.find({ client: clientId }).populate('client', 'email');
    res.json(demands);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


const updateDemandState = async (req, res) => {
  try {
    const { state } = req.body;
    const demandId = req.params.id;
    console.log("state", state);
    console.log("demand id", demandId);
    // Validate request body : state
    if (!state) {
      return res.status(400).json({ message: "state is a required field" });
    }

    // Find the demand by ID
    const demand = await DemandAdd.findById(demandId);
    if (!demand) {
      return res.status(404).json({ message: "Demand not found" });
    }

    // Update the state of the demand
    demand.state = state;
    await demand.save();

    res
      .status(200)
      .json({
        message: "Demand state updated successfully",
        updatedDemand: demand,
      });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const getDemand = async (req, res) => {
  try {
    const demands = await DemandAdd.find({ state: 'IN PROGRESS' }).populate('client', 'email');
    res.json(demands);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


const getDemandById = async (req, res) => {
  try {
    const demand = await DemandAdd.findById(req.params.id).populate('client', 'email');
    if (!demand) {
      return res.status(404).json({ message: 'Demand not found' });
    }
    res.json(demand);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


module.exports = {
  sendDemand,
  updateDemandState,
  getDemand,
  getDemandById,
  getDemandByClient
};
