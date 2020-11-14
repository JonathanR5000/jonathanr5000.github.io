import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Education from "./components/pages/Education"
import Contact from "./components/pages/Contact"
import Navbar from "./components/Navbar"

function App() {
  return (  
    <main>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/education" component={Education} />
            <Route path="/contact" component={Contact} />
            <Route components={Error} />
          </Switch>
      </Router>
    </main>

  );
}
export default App;