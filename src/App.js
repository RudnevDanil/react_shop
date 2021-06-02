import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoremIpsum from "./components/LoremIpsum";
import {Switch, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Catalog from './components/pages/Catalog';
import Contacts from './components/pages/Contacts';
import Delivery from './components/pages/Delivery';
import Payment from './components/pages/Payment';
import Cart from './components/pages/Cart';
import PageNotFound from './components/pages/PageNotFound';
import Admin from "./components/pages/Admin";
import Item from "./components/pages/Item";


function App() {
  return (
    <div className="App">
      <div style={{height: "10vh"}}><Navbar/></div>
      <div style={{minHeight: "62vh", backgroundColor:"#eee"}}>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/catalog" component={Catalog}/>
              <Route path="/contacts" component={Contacts}/>
              <Route path="/delivery" component={Delivery}/>
              <Route path="/payment" component={Payment}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/item" component={Item}/>
              <Route component={PageNotFound}/>
          </Switch>
      </div>
      <div style={{height: "28vh", fontSize: "0.7rem"}}><Footer /></div>
    </div>
  );
}

export default App;
