import React from "react";
import "./App.css";
import Header from "./containers/header/Header";
import { Navbar } from "./components";
import About from "./containers/about/About";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="gradient__bg">
        <Header />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
