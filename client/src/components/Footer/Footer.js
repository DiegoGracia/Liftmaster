import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../../assets/icons/logo.svg';
// import Mexico from '../../icons/mexico.svg';
// import Centroamerica from '../../assets/icons/centroamerica.svg';
// import Sudamerica from '../../assets/icons/sudamerica.svg';
// import Pinterest from '../../assets/icons/pinterest.svg';
// import Instagram from '../../assets/icons/instagram.svg';
// import Facebook from '../../assets/icons/facebook.svg';
// import Twitter from '../../assets/icons/twitter.svg';
// import Youtube from '../../assets/icons/youtube.svg';
import './Footer.scss';

export default class Footer extends Component{

  render() {
    return (
      <>
        <footer className="footer">

          <div className="footer__info">
            <p>Llámanos</p>
          </div>

          <div className="footer__social">
            <div className="d-flex">
              {/* <a href="/" title="Pinterest" target="_blank"> <img src={Pinterest} alt="instagram" /> </a>
              <a href="/" title="Instagram" target="_blank"><img src={Instagram} alt="instagram" /></a>
              <a href="/" title="Facebook" target="_blank"><img src={Facebook} alt="facebook" /></a>
              <a href="/" title="Twitter" target="_blank"><img src={Twitter} alt="twitter" /></a>
              <a href="/" title="Youtube" target="_blank"><img src={Youtube} alt="youtube" /></a> */}
            </div>
            <NavLink to="/" exact activeClassName="activeRoute">
              {/* <img src={Logo} alt="logo"/> */}
            </NavLink>   
          </div>

        </footer>
      </>
    )
  }
}
