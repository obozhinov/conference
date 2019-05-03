import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import Program from "./Components/Program";
import Srokove from "./Components/Srokove";
import Conference from "./Components/Conference";
import Organizator from "./Components/Organizator";
import Rules from "./Components/Rules";
import Opinions from "./Components/Opinions";
import SubscribeForm from "./Components/SubscribeForm";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Hero />
        <Program />
        <Srokove />
        <Conference />
        <Organizator />
        <Opinions />
        <Rules />
        <SubscribeForm />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
