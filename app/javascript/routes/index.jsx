import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home";
import LeagueList from "../components/league_list";
import League from "../components/league";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/leagues" exact component={LeagueList} />
      <Route path="/league/:id" exact component={League} />
    </Switch>
  </Router>
);
