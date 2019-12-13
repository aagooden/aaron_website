import React, { Component } from 'react'
// import { Route } from "react-router-dom" // Will use in future iteration
import './App.css';
import AboutMe from "./components/AboutMe"
import ProjectBox from './components/ProjectBox'
import Intro from "./components/Intro"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Education from "./components/Education"

class App extends Component {
  render() {
    return <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <ProjectBox />
      <Experience />
      <AboutMe />
      <Education />
      <Contact />
    </div>
  }
}

export default App;

