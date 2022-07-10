import React, { Component } from 'react'
import "./Academic.css"

export default class Academic extends Component {
    render() {
        return (
            <div className="academic" id="academic">
                <h2 className="title">Academic Details</h2>
                <div className="main-cart">
                    <div className="cart">
                        <h2>SSC</h2>
                        <h4>
                            school name: <strong>swastik high school</strong>
                        </h4>
                        <h4>percentage:82.50%</h4>

                        <h4>address: <address >jalaram mandir near, demai road, himmatnagar, sabrkantha, gujarat</address></h4>
                    </div>
                    <div className="cart">
                        <h2>SSC</h2>
                        <h4>
                            school name: <strong>swastik high school</strong>
                        </h4>
                        <h4>percentage:76.50%</h4>

                        <h4>address: <address >jalaram mandir near, demai road, himmatnagar, sabrkantha, gujarat</address></h4>
                    </div>
                    <div className="cart">
                        <h2>Bechlour Education</h2>
                        <h4>collage name: Viswakarma government engineering collage</h4>
                        <h4>CGPA:7.13</h4>
                        <h4>address: <address >vgec, visat chandkheda , ahmedabad, gujarat</address></h4>

                    </div>
                </div>
            </div>
        )
    }
}
