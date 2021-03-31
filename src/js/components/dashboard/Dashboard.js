import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Navbar from "../Navbar/Navbar";
import Visitors from "../../pages/Visitors";
import Documents from "../../pages/Documents";
import Documentation from "../../pages/Documentation";
import Configuration from "../../pages/Configuration";
import Maps from "../../pages/Maps";

const Dashboard = ({logout, name}) => {
  return (
    <>
      <Router>
        <Navbar logout={logout} name={name} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/visitor" component={Visitors} />
          <Route path="/documents" component={Documents} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/maps" component={Maps}/>
          <Route path="/configuration" component={Configuration}/>
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
