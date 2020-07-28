import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Textfield, Button } from "react-mdl";
import axios from "axios";
import contact from "../Images/contact.gif";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const form = await axios.post("/api/form", {
      name,
      email,
      message,
    });
  }

  render() {
    return (
      <div
        style={{ height: "100%", background: `url(${contact}) center / cover` }}
      >
        <div style={form}>
          <Textfield
            onChange={this.handleChange}
            type="text"
            name="name"
            label="Name..."
            defaultValue=""
            style={{
              width: "70%",
              border: "1px solid white",
              color: "white",
              height: "40px",
              marginTop: "45px",
              marginBottom: "55px",
              borderRadius: "15px",
              justifyContent: "center",
            }}
          />
          <Textfield
            onChange={this.handleChange}
            type="email"
            name="email"
            label="Email..."
            defaultValue=""
            style={{
              width: "70%",
              border: "1px solid white",
              color: "white",
              height: "40px",
              marginBottom: "55px",
              borderRadius: "15px",
            }}
          />
          <Textfield
            onChange={this.handleChange}
            type="textarea"
            name="message"
            label="Message..."
            defaultValue=""
            style={{
              width: "70%",
              border: "1px solid white",
              color: "white",
              height: "80px",
              marginBottom: "55px",
              borderRadius: "15px",
            }}
          />
          <Button raised colored onClick={this.handleSubmit} style={button}>
            Submit
          </Button>
        </div>
        <div className="social-links">
          {/* LinkedIn */}
          <SocialIcon
            network="linkedin"
            url="https://www.linkedin.com/in/grigore-m-824245186/"
            href="https://www.linkedin.com/in/grigore-m-824245186/"
            target="_blank"
            bgColor="#F0F8FF"
            style={{ cursor: "pointer", marginBottom: "7px" }}
          />
          {/* Github */}
          <SocialIcon
            network="github"
            url="https://github.com/Grigore94"
            n
            href="https://github.com/Grigore94"
            target="_blank"
            bgColor="#F0F8FF"
            style={{ cursor: "pointer" }}
          />
          {/* Twiter */}
          <SocialIcon
            network="twitter"
            url="https://twitter.com/GrigoreMrc"
            href="https://twitter.com/GrigoreMrc"
            target="_blank"
            bgColor="#F0F8FF"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    );
  }
}
const button = {
  marginBottom: "30px",
  flex: "1",
  justifyContent: "center",
  alignItems: "center",
  width: "400px",
  height: "40px",
  transition: "all 0.2s",
  border: "1px solid white",
  borderRadius: "13px",

  ":hover": {
    background: "green",
  },
};
const form = {
  textAlign: "center",
  onFocus: "this.value=''",
};

export default Contact;
