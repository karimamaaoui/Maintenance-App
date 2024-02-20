const User =require ("../models/User");
const bcrypt=require ("bcrypt");
const jwt =require("jsonwebtoken")


const register=async (req,res)=>{
    const {firstname,lastname,email,password} = req.body;
   
    // Check if all required fields are provided
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if the user with the given email already exists
        const foundUser = await User.findOne({ email: email }).exec();
        if (foundUser) {
            return res.status(401).json({ message: "User email already exists" });
        }

        // Hash the provided password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword
        });

        // Generate an access token
        const accessToken = jwt.sign(
            {
                UserInfo: {
                    id: user._id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );

        // Generate a refresh token
        const refreshToken = jwt.sign(
            {
                UserInfo: {
                    id: user._id
                }
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "7d" }
        );

        // Set the refresh token as an HttpOnly, secure cookie
        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
        });

    res.cookie("jwt",refreshToken,{
        httpOnly: true,  //accessible only by web server not js can access
        secure: true, //https
        sameSite : "None", //send to the domain that you deploy your app cross-site cookie
        maxAge: 7*24*60*60*1000 //expire date of the cookie  1000 1s * 60s * 60m * 24 hours * 7 numbre of days


    })


    res.status(201).json(
        {
            accessToken,
            email:user.email,
            firstname:user.firstname,
            lastname:user.lastname
    });
} catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
}
};


const login = async (req,res)=>{
    const {email,password} = req.body;
   
    // Check if all required fields are provided
    if ( !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        // Check if the user with the given email already exists
        const foundUser = await User.findOne({ email: email }).exec();
        if (!foundUser) {
            return res.status(401).json({ message: "User does not exist" });
        }

        // compare the password from req.body and saved in db
        const matchPassword = await bcrypt.compare(password, foundUser.password );

        if(!matchPassword) return res.status(401).json({ message: "Wrong Password" });


        // Generate an access token
        const accessToken = jwt.sign(
            {
                UserInfo: {
                    id: foundUser._id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );

        // Generate a refresh token
        const refreshToken = jwt.sign(
            {
                UserInfo: {
                    id: foundUser._id
                }
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "7d" }
        );

        // Set the refresh token as an HttpOnly, secure cookie
        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
        });

    res.cookie("jwt",refreshToken,{
        httpOnly: true,  //accessible only by web server not js can access
        secure: true, //https
        sameSite : "None", //send to the domain that you deploy your app cross-site cookie
        maxAge: 7*24*60*60*1000 //expire date of the cookie  1000 1s * 60s * 60m * 24 hours * 7 numbre of days


    })

    res.status(201).json(
        {
            accessToken,
            email:foundUser.email
    });
} catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error : Login Error" });
}
}

module.exports = {
    register,
    login
}