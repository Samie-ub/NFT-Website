import { CssBaseline } from "@material-ui/core";
import React from "react";
import About from "./components/About";
import Development from "./components/Development";
import Features from "./components/Features";
import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Questions from "./components/Questions";
import Join from "./components/Join";
import Last from "./components/Last";
import Navbar from "./components/Navbar";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    <>
      <CssBaseline />
      <Header />
      <Navbar />
      <About />
      <Features />
      <Roadmap />
      <Development />
      <Team />
      <Questions />
      <Join />
      <Last />
    </>
    // {/* </Router> */}
  );
}

export default App;
