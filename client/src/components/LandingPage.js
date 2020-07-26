import React, { Component } from 'react';
import { Grid, Cell, Header } from 'react-mdl';
import StarfieldAnimation from 'react-starfield-animation'
import background from '../Images/stars.jpg'


 

class LandingPage extends Component {
    
  render() {
    return(
        <div style={{
            background: `url(${background})`,
            backgroundSize: 'stretch',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
         <StarfieldAnimation
          numParticles={400}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
      <div style={{width: '100%', margin: 'auto'}}>
          
        <Grid className="landing-grid">
          <Cell col={12}>

            <div className="banner-text">
              <h5>Full Stack Web Developer</h5>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
        
        </div>
      </div>
      
    )
  }
}

export default LandingPage;