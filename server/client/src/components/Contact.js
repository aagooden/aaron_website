import React, { Component } from 'react'
import '../styles/Contact.css'

class Contact extends Component {

    render() {
        return <div className="Contact">
            <div className="contact-header">
                <h1>Contact</h1>
            </div>

            <div className="contact-container">
                <h1>Email</h1>
                <a id="email" href="mailto:aagooden@me.com">Aaron Gooden</a>
            </div>
            <div className="socialMedia">
                <a href="https://github.com/aagooden" class="fa fa-github"></a>
                <a href="https:linkedin.com/in/aaron-gooden-aag" class="fa fa-linkedin"></a>
                <a href="https:facebook.com/aaron.gooden.980" class="fa fa-facebook"></a>
            </div>

        </div>
    }
}

export default Contact

