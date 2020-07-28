const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

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
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "virginia94@ethereal.email",
        pass: "nsp2EYsfCs6BHr95Nh",
      },
    });
    let mailOptions = {
      from: "test@testaccount.com",
      to: "virginia94@ethereal.email",
      replyTo: "test@testaccount.com",
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
