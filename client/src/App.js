import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import  Main  from "./components/Main.js";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:"none",color:"white",fontSize:"25px",fontFamily:""}} to="/">HOME</Link>} scroll>
          <Navigation>
            <Link to="/about">About</Link> 
            <Link to="/projects">My Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:"none",color:"black"}} to="/">HOME</Link>}>
        <Navigation>
            <Link to="/about">About</Link> 
            <Link to="/projects">My Projects</Link>
            <Link to="/contact">Contact</Link>
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

export default App;
