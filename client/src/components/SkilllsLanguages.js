import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";


class SkillsLanguages extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ display: "flex" }}>
    <div style={{ display: "flex", width:"85px",fontSize:"15px", marginRight:"21px"}}>{this.props.skill}</div>
            <ProgressBar style={progresingBar} progress={this.props.progress} />
          </div>
        </Cell>
      </Grid>
    );
  }
}
const progresingBar = {
  margin: "auto",
  width: "75%",
  height: "18px",
  background:"red"
};

export default SkillsLanguages;
