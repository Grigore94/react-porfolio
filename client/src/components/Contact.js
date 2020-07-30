import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Textfield, Button } from "react-mdl";
import axios from "axios";
import contact from "../Images/contact.jpg";

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
        style={{
          height: "900px",
          background: `url(${contact}) center / cover`,
        }}
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
              marginBottom: "45px",
              borderRadius: "15px 15px 0px 0px",
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
              marginBottom: "45px",
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
              height: "45px",
              marginBottom: "55px",
              borderRadius: "0px 0px 15px 15px",
            }}
          />
          <div>
            <Button
              raised
              colored
              onClick={this.handleSubmit}
              style={button}
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="social-links">
          {/* LinkedIn */}
          <SocialIcon
            network="linkedin"
            url="https://www.linkedin.com/in/grigore-m-824245186/"
            href="https://www.linkedin.com/in/grigore-m-824245186/"
            target="_blank"
            bgColor="#E30303"
            style={{ cursor: "pointer", marginBottom: "7px" }}
          />
          {/* Github */}
          <SocialIcon
            network="github"
            url="https://github.com/Grigore94"
            n
            href="https://github.com/Grigore94"
            target="_blank"
            bgColor="#CBCE04"
            style={{ cursor: "pointer" }}
          />
          {/* Twiter */}
          <SocialIcon
            network="twitter"
            url="https://twitter.com/GrigoreMrc"
            href="https://twitter.com/GrigoreMrc"
            target="_blank"
            bgColor="#1035A9"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    );
  }
}
const button = {
  marginBottom: "30px",
  display: "auto",
  flex: "1",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  height: "40px",
  border: "1px solid white",
  borderRadius: "13px",
  hover: {
    variant:"secondary"
  }
};
const form = {
  textAlign: "center",
  onFocus: "this.value=''",
  opacity: "0.9",
};

export default Contact;
