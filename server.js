const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "",
        pass: "",
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    let mailOptions = {
      from: "<sender@gmail.com>",
      to: "",
      replyTo: "",
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log("Message sent: %s", info.message);
      console.log("message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

app.get("/", (req, res) => {
  console.log(__dirname);
  res.send(__dirname + "../client/build/index.html");
});

app.get("/about", (req, res) => {
  res.send(__dirname + "/client/build/index.html");
});
app.get("/contact", (req, res) => {
  res.send(__dirname + "/client/build/index.html");
});
app.get("/projects", (req, res) => {
  res.send(__dirname + "/client/build/index.html");
});

app.get("*", (req, res) => {
  res.send(__dirname + "/client/build/index.html");
});

app.listen(PORT, () => {
  console.log(`Server listent on port ${PORT}`);
});
