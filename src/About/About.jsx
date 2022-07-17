import React, { Component } from 'react';
import "./About.css"

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name:"instagram",
                    alt: "instagram",
                    img: require("../images/instagram.png"),
                    link:"https://www.instagram.com/i_am_mitul_/"
                },
                
                {
                    name:"twitter",
                    alt: "twitter",
                    img: require("../images/twitter.png"),
                    link:"https://twitter.com/I_am_mitul"
                },
                {
                    name:"github",
                    alt: "github",
                    img: require("../images/github.png"),
                    link:"https://github.com/zalamitul"
                },
                {
                    name:"linkedin",
                    alt: "linkedin",
                    img: require("../images/linkedin.png"),
                    link:"https://www.linkedin.com/in/mitul-zala-386880202/"
                },
                {
                    name:"facebook",
                    alt: "facebook",
                    img: require("../images/facebook.png"),
                    link:"https://www.facebook.com/mitul.zala.963/"
                },
                {
                    name:"whatsapp",
                    alt: "Whatsapp",
                    img:require("../images/whatsapp.png"),
                    link:"https://wa.me/+919328103935"
                },
                {
                    name:"LeetCode",
                    alt:"leetcode",
                    img:require("../images/leetcode.png"),
                    link:"https://leetcode.com/zalamitul/"
                }   
            ]
        }
    }
    render() {
        return (
            <div class="about" id="about">
                <h2 class="title">about</h2>
                <div class="aboutcontainer">
                    <h2>my social media account</h2>
                    <div class="aboutaccount">
                        {
                            this.state.data.map(item => (
                                <div><a href={item.link}><img src={item.img} alt={item.alt}/></a></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default About;