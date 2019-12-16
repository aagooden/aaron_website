import React, { Component } from 'react'
import '../styles/Intro.css'

const api_key = process.env.REACT_APP_RAPIDAPIKEY

class Intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            setup: "cheese",
            punchline: "whiz"
        }
        // Doing this to bind jokeHandler to the Intro component so 'this' definition is retained
        this.jokeHandler = this.jokeHandler.bind(this)
    }

    getJoke() {
        return new Promise((resolve, reject) => {
            let request = require("request");
            let options = {
                method: 'GET',
                url: 'https://dad-jokes.p.rapidapi.com/random/jokes',
                headers: {
                    'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
                    'x-rapidapi-key': api_key
                }
            };
            request(options, function (error, response, body) {
                if (error) reject(error);
                let setup = JSON.parse(body).setup
                let punchline = JSON.parse(body).punchline
                resolve({ setup: setup, punchline: punchline })
            });
        })
    }

    jokeHandler = () => {
        this.getJoke()
            .then(function (response) {
                this.setState(response)
            }.bind(this))
            .then(function () {
                document.getElementById('joke').style.visibility = 'visible'
                document.getElementById('punchLine').style.visibility = 'hidden'
            }.bind(this))
        // The additional binds in this function are required becasue 'this' definition
        // is lost with the extra functions in the 'then' statements
        // If arrow function is used...this is not an issue
        // .then((response)=>{ ... etc
    }

    punchHandler = () => {
        document.getElementById('punchLine').style.visibility = 'visible'
        document.getElementById('jokeBtn').innerText = 'Another One?'
    }

    render() {
        return <div className="Intro">
            <div>
                <img src={require('../images/aaron_bw.jpg')} />
            </div>
            <div className="intro-wrapper">
                <h1>Aaron Gooden</h1>
                <h2>Full Stack Web Developer</h2>
                <br />

                <p>Hello.  I am a passionate software developer, learner, public speaker, teacher, leader, musician, husband, and father.  I spent almost 20 years serving my community as an ordained United Methodist Pastor.  A few years ago, I decided to follow my life-long passion for computers.  Now I'm investing in the world a different way ... through software development.  With my broad range of experiences and skills, I can add value to any company looking for 'soft skill' qualities in addition to coding skills.
                </p>
                <br />
                <p>Take a look around.  I would love to talk to you about opportunities to work together.</p>
                <div className="socialMedia">
                    <a href="https://github.com/aagooden" class="fa fa-github"></a>
                    <a href="https:linkedin.com/in/aaron-gooden-aag" class="fa fa-linkedin"></a>
                    <a href="https:facebook.com/aaron.gooden.980" class="fa fa-facebook"></a>
                </div>
                <a href="#" id="jokeBtn" className="btn btn-white" onClick={this.jokeHandler}>See a Dad Joke!</a>
            </div>

            <div className="jokePopup" id="joke">
                <a href="#" className="btn btn-grey" onClick={this.punchHandler}>Punchline</a>
                <div className="jokeText">
                    <span id="punchBtn">{this.state.setup}
                        <br />
                        <span id="punchLine">{this.state.punchline}</span>
                    </span>
                </div>
            </div>
        </div >
    }
}


export default Intro 