import React, { Component } from 'react';
import "./Services.css"

class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    title: "web designing",
                    img: require("../images/logo.png"),
                    description: "I develop Frontend websites and web application solutions while maintaining a focus on user experience, responsive design, creativity and growth. So, if you’re just getting started and need a simple website to get your business online, I can help you to devlop website that can bring your vision to life."
                },
                {
                    title: "Software Design",
                    img: require("../images/software.png"),
                    description: "I can develop software and web application with good and optimized solutions while maintaining a focus on user experience, responsive design, creativity and growth. So, if you’re just getting started and need software to get your business online, I can help you to devlop software that can bring your vision to life."
                },
            ]
        }
    }
    render() {
        return (
            <div class="services" id="services">
                <h2 class="title">
                    services
                </h2>
                <div class="servvicesContainer">
                    {
                        this.state.data.map(item => (
                            <div class="scart">
                                <img src={item.img} alt="logo" width="300px" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Services;