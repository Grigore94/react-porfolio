const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

var connect = require("connect");

var app = connect.createServer().use(connect.static(__dirname + '/public/index.html'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Name: ${req.body.email}</li>
        </ul>
        <p>${req.body.message}</p>
        `;

    let transporter = nodemailer.createTransport({
      host: "",
      port: 464,
      auth: {
        user: "",
        pass: "",
      },
    });
    let mailOptions = {
      from: "",
      to: "",
      replyTo: "",
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: %s", info.message);
      console.log("message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listent on port ${PORT}`);
});
