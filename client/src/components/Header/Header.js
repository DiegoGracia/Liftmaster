import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Logo from '../../assets/icons/logo.svg';
import Search from '../../assets/icons/search.svg';
import Tel from '../../assets/icons/tel.svg';
import Arrow from '../../assets/icons/arrow.svg';
import Open from '../../assets/icons/open.svg';
import './Header.scss';

export default class Header extends Component{

  open(){
      const menu = document.getElementById('menu');
      menu.style.transition = "all .3s ease-in-out";
      menu.style.transform = "translateX(0)";
  }

  render() {
    return (
      <>
        <header className="header">

          <div className="header__info">
            <p>
              Llámanos 
              <span><img src={Tel} alt="tel"/></span>
              +52 (55) 8526-6363
            </p>
            <a className="main__button" href="">Localiza a tu distribuidor</a>
          </div>
      
          <div className="header__logo">
              <a href="/">
                <img src={Logo} alt="logo"/>
              </a>   
          </div>          
      
          <nav className="header__navigation">
            <NavLink to="/" exact activeClassName="activeRoute">Inicio</NavLink>
            <NavLink to="/nosotros" activeClassName="activeRoute">Sobre liftmaster</NavLink>
            <NavLink to="/tecnologia" activeClassName="activeRoute">Tecnología</NavLink>
            <NavLink to="/productos" activeClassName="activeRoute">Productos</NavLink>
            <NavLink to="/myQ" activeClassName="activeRoute">myQ</NavLink>
            <NavLink to="/contacto" activeClassName="activeRoute">Contacto</NavLink>
          </nav>

          <div className="header__search">
            <form action="">
              <div className="search">
                <input type="text" name="search" id="search" placeholder="Buscar"/>
                {/* <img src={Search} alt="search"/> */}
              </div>
              <select className="main__button__select" name="" id="">
                <option value="">MX</option>
              </select>
            </form>
          </div>
      
          <div className="header__menu">
            <button onClick={this.open}><img src={Open} alt="open" /></button>
          </div>
       
        </header>

        <Menu />

      </>
    )
  }
}
