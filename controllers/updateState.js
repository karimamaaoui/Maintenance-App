
const Demand = require('../models/DemandAdd');

const updateDemandStateToAccepted = async (req, res) => {
  try {
    const demand = await Demand.findById(req.params.id);

    if (!demand) {
      return res.status(404).json({ message: 'la demande mch mawjouda' });
    }

    demand.state = 'ACCEPTED';

    await demand.save();

    res.json(demand);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
const updateDemandStateToDecline = async (req, res) => {
    try {
      const demand = await Demand.findById(req.params.id);
  
      if (!demand) {
        return res.status(404).json({ message: 'la demande mch mawjouda' });
      }
  
      demand.state = 'REFUSED';
  
      await demand.save();
  
      res.json(demand);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };


module.exports = {
    updateDemandStateToAccepted,
    updateDemandStateToDecline,
  };
