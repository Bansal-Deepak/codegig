import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing";
import Home from "./Home";
import AddGig from "./AddGig";
import Gigs from "./Gigs";
import GigState from "./context/Gigs/GigState";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <GigState>
      <Router>
        <div>
          <Landing />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/addGig" component={AddGig} />
            <Route exact path="/allGigs" component={Gigs} />
          </Switch>
        </div>
      </Router>
    </GigState>
  );
}

export default App;
