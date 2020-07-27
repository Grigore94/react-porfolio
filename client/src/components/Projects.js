import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
} from "react-mdl";
import project1 from "../Images/project01.png";
import project2 from "../Images/project02.png";
import project3 from "../Images/project03.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(${project1}) center / cover`,
              }}
            ></CardTitle>
            <CardText>
              PRO-QUEST is a note taker for business and corporation to keep
              track on daily completed tasks still on early stage of development
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alexanderabram/pro-quest"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button
                href="https://pro-quest.herokuapp.com/signup.html"
                target="_blank"
                colored
              >
                Go to Web Site
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(${project2}) center / cover`,
              }}
            ></CardTitle>
            <CardText>
              Favorite-Farm is web site in help to our users and farmers during
              pandemic.One of the great future of it is finding 10 best stores
              near you.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/Grigore94/projectX"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button
                href="https://grigore94.github.io/projectX/"
                target="_blank"
                colored
              >
                Go to Web Site
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(${project3}) center / cover`,
              }}
            ></CardTitle>
            <CardText>
              Employee-Directory easy to use app to find all company employees
              by First or Last Name.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/Grigore94/employee-directory"
                target="_blank"
                colored
              >
                GitHub
              </Button>
              <Button
                href="https://grigore94.github.io/employee-directory/"
                target="_blank"
                colored
              >
                Go to Web Site
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is NodeJS</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
