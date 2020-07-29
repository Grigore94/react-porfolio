import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import  Main  from "./components/Main.js";
import { Link } from "react-router-dom";


function App() {
  return (
    
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:"none",color:"white",fontSize:"25px"}} to="/"><span role="img">🏠</span>HOME</Link>} scroll>
          <Navigation>
            <Link style={drawerstyles} to="/about">About</Link> 
            <Link style={drawerstyles} to="/projects">My Projects</Link>
            <Link style={drawerstyles} to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer style={{backgroundColor:"black",opacity:".8"}}title={<Link style={{textDecoration:"none",color:"white"}} to="/"><span role="img">🏠</span>🏠HOME</Link>}>
        <Navigation >
            <Link style={drawerstyles} to="/about">About</Link> 
            <Link style={drawerstyles} to="/projects">My Projects</Link>
            <Link style={drawerstyles} to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
      </Layout>
      </div>
      
  );
}
const drawerstyles = {
  textDecoration:"none",
  color:"white",
  fontSize:"25px",
}

export default App;
