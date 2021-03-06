import React from "react";
import { LandingPage } from "./Pages/LandingPage/LandingPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProjectsPage } from "./Pages/ProjectsPage/ProjectsPage";
import { Header } from "./Components/Header/Header";
import { ParticlesBackground } from "./Components/ParticlesBackground/ParticlesBackground";
import MiniDrawr from "./Components/MiniDrawer.tsx/MiniDrawr";
import { Footer } from "./Components/Footer/Footer";
import { AboutMePage } from "./Pages/AboutMePage/AboutMePage";
import { ResumePage } from "./Pages/ResumePage/ResumePage";
import { SkillsPage } from "./Pages/SkillsPage/SkillsPage";
import { ContactPage } from "./Pages/ContactPage/ContactPage";

function App() {
  return (
    <div>
      {/* <ParticlesBackground /> */}
      <Router>
        <MiniDrawr />
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/aboutme">
            <AboutMePage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/resume">
            <ResumePage />
          </Route>
          <Route exact path="/skills">
            <SkillsPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
