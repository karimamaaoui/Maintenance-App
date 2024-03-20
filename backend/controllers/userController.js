const User = require ('../models/User')

const getAllUsers = async (req,res)=>{
    //select users without password
    const users = await User.find().select("-password").lean()
    if(!users.length){
        res.status(400).json({message : "No Users Found"});
    }
    res.json(users)
}

const getUser = async (req, res) => {
 
  try {
  
    const user = await User.findById(req.user);
    //console.log("user fron get user", req.user)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateProfile = async (req, res) => {
  try {
      const { firstname,lastname,email } = req.body;
//      console.log("req.body from update user", req.body)

      const userId = req.user;
    //  console.log("user from update user", userId)
  
      const updatedUser = await User.findByIdAndUpdate(userId, { firstname,lastname,email }, { new: true });
      if (!updatedUser) {
          console.log("user update ",updatedUser)
          return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res.status(200).json(updatedUser);
  } catch (error) {
      console.error(error);

      res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
  }
};


module.exports ={
    getAllUsers,
    getUser,
    updateProfile
}