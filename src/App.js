import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './CSS/index.css';
import Menu from './Javascript/Menu.js';
import Hero from './Javascript/Hero.js';
import Landing from './Javascript/Landing.js';
import Cart from './Javascript/Cart.js';
import Catalog from './Javascript/Catalog.js';
import Product from './Javascript/Catalog.Product.js';
import Locations from './Javascript/Locations.js';
import Thanks from './Javascript/Thanks.js';
import Footer from './Javascript/Footer.js';
import Respond404 from './Javascript/404.js';

function App() {
  return (
    <div className="App">
      <main role="main">
        <Menu />
        <Hero />
        <Switch>
          <Route exact={true} path="/" component={Landing} />
          <Route path="/Cart" component={Cart} />
          <Route exact={true} path="/Catalog/:slug" component={Product} />
          <Route exact={true} path="/Catalog" component={Catalog} />
          <Route path="/Locations" component={Locations} />
          <Route path="/Thanks" component={Thanks} />
          <Route component={Respond404} />
        </Switch>
        <Footer /> 
      </main>
    </div>
  );
}

export default App;
