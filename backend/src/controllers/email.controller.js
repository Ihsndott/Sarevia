//This is for receiving customer message from contact page

const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
     service:"Gmail",
     auth:{
         user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD
     }
});

const receiveEmail = async (req,res)=>{
    try{
        const {name,email,subject,message} = req.body;

        if(!name || !email || !subject || !message)
            return res.status(400).json({
             success:false,
             message:"Please check the fields.."
        })
        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:process.env.EMAIL_USER,
            replyTo:email,
            subject: `Sarevia Contact: ${subject}`,
            text:`Message from Sarevia 
                  customer Name:${name}
                  customer Mail:${email}
                  subject:${subject}
                  message:${message}`
                });
            
        res.json({
            success:true,
            message:"Your message has sent successfully...!"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
        success:false,
        message:"Failed to send, Try again"
        });
    }
} 
module.exports={receiveEmail};

