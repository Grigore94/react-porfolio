import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education"
import Eperience from "./Experience";
import SkillsLanguages from "./SkilllsLanguages";
import Meme from "../Images/meme.jpeg"

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Meme}
                alt="Picture of Me"
                style={mypicture}
              />
            </div>
            <h2 style={{ padding: "0.8em",textAlign:"center" }}>Grigore Mereacre</h2>
            <h4 style={{ color: "gray" }}>Full Stack Web Developer</h4>
            <hr style={{ broderTop: "3px solid #833fb2", width: "50%" }} />
            <p>loremipsum</p>
            <hr style={{ broderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>hacker way menlo park</p>
            <h5>Phone:</h5>
            <p>6765553345</p>
            <h5>Email:</h5>
            <p>ahahdla@gmail.com</p>
            <hr style={{ broderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
           <h2>Education</h2>

           <Education
           startYear={2012}
           endYear={2015}
           schoolName="University of Cali"
           schoolDescription="best university in the world"
           />
           <hr style={{borderTop:"3px solid #e22947"}} />

           <h2>Experience</h2>
           <Eperience
           startYear={2016}
           endYear={2017}
           jobName="Dispacher"
           jobDescription="kkdkdkdkdkd"
           />
           
           <hr style={{borderTop:"3px solid #e22947"}} />
           <h2>Skills</h2>
           <SkillsLanguages
           skill="JavaScript"
           progress={55}
           />
           <SkillsLanguages
           skill="HTML/CSS"
           progress={75}
           />
           <SkillsLanguages
           skill="NodeJS"
           progress={55}
           />
           <SkillsLanguages
           skill="React"
           progress={20}
           />
           <SkillsLanguages
           skill="MongoDB"
           progress={65}
           /><SkillsLanguages
           skill="MySQL"
           progress={65}
           />

          </Cell>
        </Grid>
      </div>
    );
  }
}
const mypicture = {
  height: "350px",
  borderRadius: "28px",
  border: "1px solid gray",
  boxShadow: "2px 7px 9px #696969	"
}

export default About;
