import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Close from '../../assets/icons/close.svg';
import './Menu.scss';

export default class Menu extends Component{

  close(){
      const menu = document.getElementById('menu');
      menu.style.transition = "all .3s ease-in-out";
      menu.style.transform = "translateX(100vw)";
  }

  render() {
    return (
      <>
        <div className="menu js-menu" id="menu" role="menu">

          <div className="menu__close">
            <button onClick={this.close}><img src={Close} alt="close" /></button>
          </div>

          <nav className="menu__navigation">
            <NavLink onClick={this.close} to="/" exact activeClassName="activeRoute">Inicio</NavLink>
            <NavLink onClick={this.close} to="/nosotros" activeClassName="activeRoute">Sobre liftmaster</NavLink>
            <NavLink onClick={this.close} to="/tecnologia" activeClassName="activeRoute">Tecnología</NavLink>
            <NavLink onClick={this.close} to="/productos" activeClassName="activeRoute">Productos</NavLink>
            <NavLink onClick={this.close} to="/myQ" activeClassName="activeRoute">myQ</NavLink>
            <NavLink onClick={this.close} to="/contacto" activeClassName="activeRoute">Contacto</NavLink>
          </nav>

        </div>      
      </>
    )
  }
}
