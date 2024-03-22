const transporter = require("../config/nodemailer");

const verifyEmail = async (email,fullname,link)=>{
    return await  transporter.sendMail({
        from: '"Maintenace Agency 👻" scongresses@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Confirm your account", // Subject line
        text: "Hello world?", // plain text body
        html: `
            <div>
                <p>Dear ${fullname},</p>,
                <p>Thank you for signing up for an account ... </p>

                <p>To complete your registration , please click <a href="${link}"> here</a> </p>
            </div>
        `, // html body
      });
    
}

const restPasswordEmail = async (email,fullname,link)=>{
    return await  transporter.sendMail({
        from: '"Maintenace Agency 👻" scongresses@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Reset Password", // Subject line
        html: `
            <div>
                <p>Dear ${fullname},</p>,
                <p>to Reset your password, please click <a href="${link}"> here</a> </p>
            </div>
        `, // html body
      });
    
}


module.exports = {verifyEmail,restPasswordEmail};