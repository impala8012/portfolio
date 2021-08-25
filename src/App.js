import React from "react"
import GlobalStyle from "./globalStyles";
import { HashRouter as Router, Switch, Route} from "react-router-dom"
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/experience" component={ExperiencePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
