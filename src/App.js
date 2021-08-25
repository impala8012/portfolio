import React from "react"
import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Navbar, Footer } from "./components";
import HomePage from "./pages/HomePage/HomePage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ScrollTop from "./components/ScrollTop"
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/projects" component={ProjectPage} />
        <Route path="/experience" component={ExperiencePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
