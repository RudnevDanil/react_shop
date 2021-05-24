import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import LoremIpsum from "./components/LoremIpsum";

function App() {
  return (
    <div className="App">
      <div style={{height: "10vh"}}><Navbar/></div>
      <div style={{minHeight: "55vh"}}>
          <LoremIpsum />
      </div>
      <div style={{height: "35vh"}}><Footer /></div>
    </div>
  );
}

export default App;
