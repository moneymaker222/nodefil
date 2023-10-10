const express = require('express');
const sendMail = require('./mail');
const sendWelcomeEmail = require('./example.js');

const log = console.log;
const app = express();
const path = require('path');

var port = process.env.PORT || 8080;

// chunck 2
//data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());



//email, subject, text 
app.post('/email', (req, res) => {
 //todo:
 //send email here
 const { timestamp, time, date, email, subject, text } =req.body;
 console.log('Data: ', req.body);
 

 sendMail( timestamp, time, date, email, subject, text, function(err, data){
  if (err) {
       res.status(500).json({ message: 'Internal Error'});
     } else {
         res.json({ message: 'Email sent .!!!'});
     }
   });
   sendWelcomeEmail( email, subject, text, function(err, data){
    if (err) {
         res.status(500).json({ message: 'Internal Error'});
       } else {
           res.json({ message: 'Email sent .!!!'});
       }
     });


});






app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



app.listen(port, () => log('Server is starting on PORT, ', 8080));