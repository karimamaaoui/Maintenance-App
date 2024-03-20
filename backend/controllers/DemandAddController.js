const DemandAdd = require("../models/DemandAdd");
const StateDemand = require("../models/enums/StateDemand");

const sendDemand = async (req, res) => {
  try {
    const { state, organisation } = req.body;

    if ((!state, !organisation)) {
      return res.status(404).json({ message: "Fields required" });
    }
    const clientId= req.user;
    console.log("client id",clientId)

    const newDemand = new DemandAdd({
      state: StateDemand.INPROGRESS,
      organisation: organisation,
      client: clientId,
    });
    // Save the demand to the database
    await newDemand.save();

    res.status(201).send("Demand sended successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  sendDemand,
};
