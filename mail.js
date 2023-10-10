

const nodemailer = require('nodemailer');

const dotenv = require("dotenv")

dotenv.config()

const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
      user: 'placosostudio@gmail.com',
      pass: 'vauh clmz eqfn ikyn'
  }
});


    const sendMail = ( timestamp, time, date, email, subject, text,  cb) => {


         
        let mailOptions = {
            from: email, 
            to: 'jesuscarrion775@gmail.com',
            subject: `Placosostudio.com ~ Client Alert!~`,
            text:  `new email sent in ` ,
                       html: `

<html>

<head>
<meta charset="utf-8" />
<title></title>
<style>
  * {
    box-sizing: border-box;
  }
</style>
</head>

<body style="background-color: #f4f4f4; font-family: Roboto, arial, sans-serif">
<div>
from :${email} 
</div><br>

<div>

meesage : hey i wanted to see if you can tattoo me on the ${date} @ :${time} <br>

</div><br>
sent in :${timestamp} <br>
</body>

</html>`
            
          
        };
    
    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
           cb(err, null);
        } else { 
          cb(null, data);
        }
    });


}
module.exports = sendMail;