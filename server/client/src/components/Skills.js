import React, { Component } from 'react'
import '../styles/Skills.css'

class Skills extends Component {

    render() {
        return <div className="Skills">
            <div className="skills-header">
                <h1>My Skills</h1>
            </div>
            <div className="skills-container">
                <div className="languages">
                    <img src={require('../images/javascriptHTMLCSS.png')} />
                    <img src={require('../images/react.png')} />
                    <img src={require('../images/ruby.jpg')} />
                    <img src={require('../images/rails.png')} />
                    <img src={require('../images/express.png')} />
                    <img src={require('../images/sql.png')} />
                </div>
                <div className="tools">
                    <img src={require('../images/github.png')} />
                    <img src={require('../images/sinatra.jpg')} />
                </div>
            </div>
        </div>
    }
}

export default Skills