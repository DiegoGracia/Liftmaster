import React, { Component } from 'react';
import './Home.scss';

//IMAGES
import mainBanner from '../../assets/images/Home/banner_principal.png';

export default class Home extends Component{

  render() {
    return (
      <>
        <div className="home">

          <div className="home__main">
            <img src={mainBanner} alt="mainBanner"/>
          </div>

          <div className="home__marca">
            
          </div>

        </div>
      </>
    )
  }
}
