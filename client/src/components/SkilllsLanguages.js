import React, {Component } from "react";
import {Grid, Cell, ProgressBar} from "react-mdl";
import Background from "./Background";

class SkillsLanguages extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{display:"flex"}}>{this.props.skill} <ProgressBar style={progresingBar}
                    progress={this.props.progress}/></div>
                </Cell>
            </Grid>
        )
    }
}
const progresingBar = {
    margin:"auto",
    width:"75%",
    height:"12px",
    background:"linear-gradient(to right, #4880EC, #019CAD)",
};

export default SkillsLanguages;