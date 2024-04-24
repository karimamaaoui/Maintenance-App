const Sponsor = require ('../models/Sponsor')

// get Sponsor by bel ID
const GetSponsor = async (req,res)=>{
    try 
    {
        const sponsorId = req.params.sponsorId;
        const Sponsor = await sponsor.findById(sponsorId);
        if (!Sponsor) 
        {
            return res.status(404).json({ message: "Sponsor mouch mawjoud" });
        }
        
        res.json(Sponsor);
    }
    catch(err)
    {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    } 
}

// insertion d'un sponsor jdid 

const AddSponsor = async (req,res)=>{

    try {
        const { name, contactPerson, email, phone, logo, website } = req.body;
        
    const new_Sponsor = new Sponsor({
        name,
        contactPerson,
        email,
        phone,
        logo,
        website,
    });
    await new_Sponsor.save();
    res.status(201).json({ message: 'Sponsor added successfully', sponsor : new_Sponsor });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

}
// get all sponsors 

const GetAllSponsors = async (req,res) =>{
    const sponsors = await Sponsor.find()
    if(!sponsors.length){
        res.status(400).json({message : "No sponsors"});
    }
    res.json(sponsors)
}
// update by id 

const UpdateSponsor = async (req,res)=>{
    try{
        const sponsorId = req.params.sponsorId;
        const Spon = await Sponsor.findById(sponsorId)
        if (!Spon) {
            return res.status(404).json({ message: "Sponsor pas mawjoud" });
        }
        await sponsor.findByIdAndUpdate(sponsorId, req.body, { new: true });
        res.json({ message: "Sponsor updated" });

    }catch(err){
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });

    }
}

// delete by id 

const DeleteSponById = async (req, res) => {
    try {
        const sponsorId = req.params.sponsorId;

        // Check if the sponsor exists
        const Sponsor = await Sponsor.findById(sponsorId);
        if (!Sponsor) {
            return res.status(404).json({ message: "Sponsor not here " });
        }

        // If the sponsor exists, delete it
        await Sponsor.findByIdAndDelete(sponsorId);

        res.json({ message: "Sponsor deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports={
    GetSponsor,
    AddSponsor,
    GetAllSponsors,
    DeleteSponById,
    UpdateSponsor
}

