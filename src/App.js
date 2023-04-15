import React from "react";
import './App.css';
import Header from "./containers/header/Header";
import { Navbar } from "./components";
import About from "./containers/about/About";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <About />
    </div>
  );
}

export default App;
