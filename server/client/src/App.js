import React, { Component } from 'react'
import { Route } from "react-router-dom"
import './App.css';
import About from "./modules/About"
import ProjectBox from './modules/ProjectBox.js'

class App extends Component {
  render() {
    return <div className="App">
      <Route path="/projects" component={ProjectBox} />
      <Route path="/about" component={About} />
    </div>
  }
}

export default App;

