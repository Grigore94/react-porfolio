import React, {Componnet} from 'react';
import './App.css';
import {Layout, Header, Navigation,Drawer, Container} from "react-mdl";
import{Main} from "./components/Main";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:"none",color:"white"}} to="/">MyPorfolio</Link>} scroll>
          <Navigation>
            <Link to="/about">About</Link> 
            <Link to="/projects">My Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:"none",color:"black"}} to="/">MyPortfolio</Link>}>
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
