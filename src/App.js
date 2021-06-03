import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CustomerAccessPage } from "./components/customerAccessPage";
import { Trailer } from "./components/Trailer";
import Services from './components/Services';
import { AppProductvagos } from './components/Products/AppProductvagos';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products/vagos' exact component={AppProductvagos} />
          <Route path='/products' exact component={Cards} />
          <Route path='/services' exact component={Services} />
          <Route path='/social' exact component={Footer} />
          <Route path='/trailer' exact component={Trailer} />
          <Route path="/customer/access/:action" exact component={CustomerAccessPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
