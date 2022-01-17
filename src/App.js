import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import About from "./About";
import Channels from "./Channels";
import Tests from "./Tests";
import Meet from "./Meet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MeetingRoom from "./MeetingRoom";
import MainFooter from "./MainFooter";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/channels">
            <Navbar />
            <Channels />
            {/* <MainFooter /> */}
          </Route>
          <Route path="/tests">
            <Navbar />
            <Tests />
            {/* <MainFooter /> */}
          </Route>
          <Route path="/meeting-room">
            <MeetingRoom />
          </Route>
          <Route path="/meet">
            <Navbar />
            <Meet />
            <MainFooter />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
            <MainFooter />
          </Route>
          <Route path="/">
            <Navbar />
            <Body />
            <MainFooter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
// https://colorhunt.co/palette/0000006a097dc060a1f1d4d4
