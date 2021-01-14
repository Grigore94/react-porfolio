import React, { Component } from "react";
import { Textfield, Button } from "react-mdl";
import { SocialIcon }from "react-social-icons";
import axios from "axios";
import contact from "../Images/contact.jpg";
import Footer from "./Footer";

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
      message
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
              height: "57px",
              marginTop: "15px",
              borderRadius: "15px 15px 0px 0px",
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
              height: "57px",
             
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
              height: "58px",
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
              Send Message
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
        <Footer/>
      </div>
    );
  }
}
const button = {
  marginBottom: "30px",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  height: "40px",
  border: "1px solid white",
  borderRadius: "13px",
};
const form = {
  textAlign: "center",
};

export default Contact;
