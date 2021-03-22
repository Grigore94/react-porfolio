import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  LandingPage  from './LandingPage';
import  About  from './About';
import Projects from './Projects';
import Contact from './Contact';
import Blog from "./Blog";




const Main = () => (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={About} />  
      <Route path="/projects" component={Projects} />
      <Route path="/blogs" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Switch>

  )


export default Main;