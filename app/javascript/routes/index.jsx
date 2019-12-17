import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home";
import LeagueList from "../components/league_list";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/leagues" exact component={LeagueList} />
    </Switch>
  </Router>
);
