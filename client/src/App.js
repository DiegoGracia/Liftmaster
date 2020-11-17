import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/main.min.css';

//COMPONENTS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/Nosotros';
import Productos from './components/Productos/Productos';
import Tecnologia from './components/Tecnologia/Tecnologia';
import MyQ from './components/MyQ/MyQ';
import Contacto from './components/Contacto/Contacto';
import Login from './components/Login/Login';

export default function App() {
  return (
    <Router>

      <Header />

      <main className="main">
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/productos" component={Productos} />
          <Route path="/tecnologia" component={Tecnologia} />
          <Route path="/myQ" component={MyQ} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/login" component={Login} />
        </Switch>

      </main>

      <Footer />

    </Router>
  );
}
