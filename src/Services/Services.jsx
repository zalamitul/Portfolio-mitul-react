import React, { Component } from 'react';
import "./Services.css"

class Services extends Component {
    render() {
        return (
            <div class="services" id="services">
                <h2 class="title">
                    services
                </h2>
                <div class="servvicesContainer">
                    {/* <!-- web design --> */}
                    <div class="scart">
                        <img src={require("../images/logo.png")} alt="logo" width="300px"/>
                            <h3>web designing</h3>
                            <p>I develop Frontend websites and web application solutions while maintaining a focus on user experience, responsive design, creativity and growth. So, if you’re just getting started and need a simple website to get your business online, I can help you to devlop website that can bring your vision to life.</p>
                    </div>
                    {/* software design */}
                    <div class="scart">
                        <img src={require("../images/software.png")} alt="logo" width="300px"/>
                            <h3>Software Design</h3>
                            <p>I develop Frontend websites and web application solutions while maintaining a focus on user experience, responsive design, creativity and growth. So, if you’re just getting started and need a simple website to get your business online, I can help you to devlop website that can bring your vision to life.</p>
                    </div>

                    
                </div>
            </div>
        );
    }
}

export default Services;