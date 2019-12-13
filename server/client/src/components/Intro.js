import React, { Component } from 'react'
import '../styles/Intro.css'

class Intro extends Component {
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
            </div>

        </div >
    }
}

export default Intro 