

    const express = require('express');
    const bodyParser = require('body-parser');
    var Client = require('ftp');
    var fs = require('fs');
    
    const app = express();
    const port = process.env.PORT || 5000;
    
    const nodemailer = require("nodemailer");
    const morgan = require('morgan');
    const router = require("express").Router();
    const path = require("path");
    
    // aws bucket
    const AWS = require('aws-sdk');
    require('dotenv').config();
    const Busboy = require('busboy');
    const busboy = require('connect-busboy');
    const busboyBodyParser = require('busboy-body-parser')
    const cors = require('cors')
    app.use(cors());
    
    app.use(morgan('dev'));
    
    app.use(busboy())
    app.use(busboyBodyParser())
    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    
    app.post('/api/sendmail', function (req, res) {
      console.log("keys")
      const data = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
      };
    
  console.log(data);

let mailTo = `mailto:${data.email}?subject=RE:${data.subject}`;
let emailContent = `

<style>
p {
  font-family: serif;
  font-size:19px;
}
button {
  font-family:serif;
  display: inline-block;
  font-weight: 400;
  color: #0E3B62;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid #0E3B62;
  padding: .375rem .75rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

button:hover {
  color: #fff;
  background-color: #6F8EA8;
  border-color: #6F8EA8;
}
</style>
<p><strong>${data.name}</strong> has contacted you:<p>
 <p><a href=${mailTo}>Email: ${data.email}<a><p>
 <p>Subject: ${data.subject}<p>
 <hr>
 <p>Message: </p>
 <p>${data.message}</p>
 <a href=${mailTo}><button>Reply</button></a>`

  // async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Godaddy',
    host: process.env.host,
    // host: 'smtpout.secureserver.net'
    port: 587,
    secureConnection: true, // true for 465, false for other ports
    auth: {
      user: process.env.user, // generated ethereal user
      pass: process.env.pass, // generated ethereal password
    },
    tls:{
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `info@blueheronculinary.com`, // sender address
    to: "info@blueheronculinary.com", // list of receivers
    subject: `${data.subject}`, // Subject line
    // text: `${data.message}`, // plain text body
    html: emailContent, // html body
  });

  
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
if (info.messageId) {
  res.send('POST request to the homepage')
} else {
  console.log("ERROR!")
    return res.status(400).send({
      message: 'This is an error!'
    });
}
}

main().catch((error) => {
  if (error) {
    console.log(error)
    res.status(400).send();
  }

});
    })
    
 
      if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, 'client/build')));
    
        // Handle React routing, return all requests to React app
        app.get('*', function (req, res) {
          res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
        });
      }
    
    
      app.listen(port, () => console.log(`Listening on port ${port}`));
    // console.log('Application running!' + cluster.worker.id);
    // }