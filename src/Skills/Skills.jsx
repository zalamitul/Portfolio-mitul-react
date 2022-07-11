import React, { Component } from 'react';
import "./Skills.css"
// import "./images"

class Skills extends Component {
    render() {
        return (
            <div class="skills" id="skills">
                <div class="backgroundOptacity">
                    <h2 class="title">Skills</h2>
                    <div class="skillContainer">
                        
                        {/* <!-- PYTHION --> */}
                        <div class="skillItem">
                            <h2>
                                python<span>
                                    <img src={require("../images/python.png")} alt="home"/></span>
                            </h2>
                            <div class="progress-indicater">
                                <span id="python" class="progress"></span>
                                <span class="persantage">78%</span>
                            </div>
                        </div>
                        
                        {/* <!-- c++ --> */}
                        <div class="skillItem">
                            <h2>
                                C++ <span><img src={require("../images/css.png")} alt="home"/></span>
                            </h2>
                            <div class="progress-indicater">
                                <span id='cpp' class="progress" ></span>
                                <span class="persantage">70%</span>
                            </div>
                        </div>

                        {/* <!-- php --> */}
                        <div class="skillItem">
                            <h2>
                                php<span><img src={require("../images/php.png")} alt="php"/></span>
                            </h2>
                            <div class="progress-indicater">
                                <span id='php' class="progress" ></span>
                                <span class="persantage">48%</span>
                            </div>
                        </div>
                        
                        {/* <!-- JAVA --> */}
                        <div class="skillItem">
                            <h2>
                                java<span><img src={require("../images/java.png")} alt="java"/></span>
                            </h2>
                            <div class="progress-indicater">
                                <span id='java' class="progress" ></span>
                                <span class="persantage">50%</span>
                            </div>
                        </div>

                        {/* <!-- html --> */}
                        <div class="skillItem">
                            <h2>
                                html <span><img src={require("../images/html-5.png")} alt="html"/></span>
                            </h2>
                            <div class="progress-indicater">
                                <span id='html' class="progress"></span>
                                <span class="persantage">90%</span>
                            </div>
                        </div>
                        
                        {/* <!-- css --> */}
                        <div class="skillItem">
                            <h2>
                                css<span>
                                    <img src={require("../images/css.png")} alt="css"/></span>
                            </h2>
                            <div class="progress-indicater">
                                <span id='css' class="progress" ></span>
                                <span class="persantage">80%</span>
                            </div>
                        </div>

                        {/* <!-- java script --> */}
                        <div class="skillItem">
                            <h2>
                                java script <span><img src={require("../images/java-script.png")} alt="java script"/></span>
                            </h2>
                            <div class="progress-indicater">
                                <span id='javascript' class="progress"></span>
                                <span class="persantage">70%</span>
                            </div>
                        </div>

                        {/* <!-- mean --> */}
                        <div class="skillItem">
                            <h2>
                                MEAN<span><img src={require("../images/mean.png")} alt="mean"/></span>
                            </h2>
                            <div class="progress-indicater">
                                <span id='mean' class="progress"></span>
                                <span class="persantage">85%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;