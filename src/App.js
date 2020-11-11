import React from 'react';
import './App.css';
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Education from "./components/pages/Education"
import Contact from "./components/pages/Contact"
import Navbar from "./components/Navbar"

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" components={Home} exact />
        <Route path="about" components={About}  />
        <Route path="projects" components={Projects}  />
        <Route path="education" components={Education}  />
        <Route path="contact" components={Contact}  />
        <Route components={Error} />
      </Switch>
    </main>

  );
}
export default App;