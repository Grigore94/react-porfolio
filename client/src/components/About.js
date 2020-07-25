import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education"
import Eperience from "./Experience";
import SkillsLanguages from "./SkilllsLanguages"

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ padding: "2em" }}>Grigore</h2>
            <h4 style={{ color: "gray" }}>Programer</h4>
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
           skill="javascript"
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

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
