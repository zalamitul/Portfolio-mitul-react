import React, { Component } from 'react';
import "./About.css"

class About extends Component {
    render() {
        return (
            <div class="about" id="about">
                <h2 class="title">about</h2>
                <div class="aboutcontainer">
                    <h2>my social media account</h2>
                    <div class="aboutaccount">
                        <div><a href="https://www.instagram.com/i_am_mitul_/"><img src={require("../images/instagram.png")} alt=""/></a></div>
                        <div><a href="tel:+919328103935"><img src={require("../images/twitter.png")} alt=""/></a></div>
                        <div><a href="https://github.com/zalamitul"><img src={require("../images/github.png")} alt=""/></a></div>
                        <div><a href="https://www.linkedin.com/in/mitul-zala-386880202/"><img src={require("../images/linkedin.png")} alt=""/></a>
                        </div>
                        <div><a href="http://localhost:5500/#home"><img src={require("../images/facebook.png")} alt=""/></a></div>
                        <div><a href="https://wa.me/+919328103935"><img src={require("../images/whatsapp.png")} alt=""/></a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;