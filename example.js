const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth : {
      user: 'placosostudio@gmail.com',
      pass: 'vauh clmz eqfn ikyn'
  }
})

const footer = `Thank you for using our service!`

function sendWelcomeEmail(email) {
    const text =
    `
    Thank you for signing up! Read our quickstart guide below.
    https://placosostudio.com

    ${footer}
    `

    const options = {
      from: 'test@gmail.com',
      to: email,
      subject: `Placosostudio Request Received!`,
      text: "Once the request has been reviewed you will receive an email updating you on it.",
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

</div>
<div style="max-width: 550px; background-color: white; margin: -80px auto 0 auto; padding: 20px 60px 80px 60px;">
  <div style="  font-size: 30px; font-weight: 300; margin-top: 20px; text-align: center;"> Email Received!</div>
  <br />
  <p> Congratulations! Your email has been confirmed<br>${email} Request ReceivedOnce the request has been reviewed you will receive an email updating you on it..</p>
  <div class=" box-sizing: border-box; width: 100%;">
    <br />
    <br />
    <div style="font-size: 18px; text-align: center">
      Welcome to Placosostudio!
    </div>
<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjBxMmhlMWVpemI3aGcwOGM2Y3hiY3RydDZpbmltbHltdGQzcGxmMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oD3Yj2rzZR3RGw2nC/giphy.gif"  >
  </div>
</div>
</body>

</html>`
    }








    transporter.sendMail(options, (err, info) => {
        if (!err) {
            console.log(`Sent welcome email to ${email}`)
        } else {
            console.log("nodemailer failed", err)
        }
    })
}

sendWelcomeEmail("placosostudio@gmail.com")
module.exports = sendWelcomeEmail;