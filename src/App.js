import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import About from "./About";
import Channels from "./Channels";
import Tests from "./Tests";
import Meet from "./Meet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/channels">
            <Channels />
          </Route>
          <Route path="/tests">
            <Tests />
          </Route>
          <Route path="/meet">
            <Meet />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
// https://colorhunt.co/palette/0000006a097dc060a1f1d4d4
