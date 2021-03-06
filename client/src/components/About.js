import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
// import Eperience from "./Experience";
import SkillsLanguages from "./SkilllsLanguages";
import Meme from "../Images/meme.jpeg";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={Meme} alt="Me" style={meme} />
            </div>

            <h2 style={{ padding: "0.8em", textAlign: "center" }}>
              Grigore Mereacre
            </h2>

            <hr />
            <h4 style={{ color: "gray" }}>FullStack Web Developer</h4>
            <hr style={{ broderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Hello my name is Grigore,I am a web developer.I was always
              captivated by how things work and why certain things does not.Hard
              working,creative and able to learn quick.I have passion for code
              and agriculture.{" "}
            </p>
            <hr style={{ broderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address:</h5>
            <p>Nashville Tennesse</p>
            <h5>Phone:</h5>
            <p>615-942-3555</p>
            <h5>Email:</h5>
            <p>grigore.mereacre@gmail.com</p>
            <hr style={{ broderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{ textAlign: "center" }}>Education</h2>

            <Education
              startYear={2014}
              endYear={2017}
              schoolName="University of European Studies"
              schoolDescription="Economics"
            />
            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Nashville Software School"
              schoolDescription="Web Development"
            />
            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Vanderbilt University Boot Camps"
              schoolDescription="Full Stack"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2 style={{ textAlign: "center" }}>Skill Set</h2>

            <SkillsLanguages skill="HTML/CSS" progress={55} />

            <SkillsLanguages skill="JavaScript" progress={75} />
            <SkillsLanguages skill="NodeJS" progress={55} />
            <SkillsLanguages skill="React" progress={20} />
            <SkillsLanguages skill="MongoDB" progress={65} />
            <SkillsLanguages skill="MySQL" progress={65} />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2 style={{ textAlign: "center" }}>Languages</h2>
            <SkillsLanguages skill="English" progress={75} />
            <SkillsLanguages skill="Romanian" progress={95} />
            <SkillsLanguages skill="Russian" progress={85} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
const meme = {
  height: "350px",
  borderRadius: "28px",
  border: "1px solid gray",
  boxShadow: "11px 12px 15px #696969	",
};

export default About;
