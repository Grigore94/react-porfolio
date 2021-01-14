import React from "react";

const Footer = () => (
    <div className="footer" style={footer}>
        ©2021  Powered by StaightLineUP inc
    </div>
)

const footer = {
    marginTop: "1rem",
    padding:"1rem",
    backgroundColor:"black",
    position:"fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    color: "white",
}

export default Footer;