import React from "react";
import { LandingPage } from "./Pages/LandingPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
function App() {

  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
