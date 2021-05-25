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
import Cart from './components/pages/Cart';
import PageNotFound from './components/pages/PageNotFound';


function App() {
  return (
    <div className="App">
      <div style={{height: "10vh"}}><Navbar/></div>
      <div style={{minHeight: "64vh", backgroundColor:"#fff"}}>
          {/*<LoremIpsum />*/}
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/catalog" component={Catalog}></Route>
              <Route path="/contacts" component={Contacts}></Route>
              <Route path="/delivery" component={Delivery}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route component={PageNotFound}></Route>
          </Switch>
      </div>
      <div style={{height: "26vh", fontSize: "0.7rem"}}><Footer /></div>
    </div>
  );
}

export default App;
