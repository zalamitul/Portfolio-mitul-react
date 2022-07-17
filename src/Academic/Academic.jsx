import React, { Component } from 'react'
import "./Academic.css"

export default class Academic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    CourseName: "SSC",
                    percentage: 82.50,
                    address:"Jalaram Mandir Near, Demai Road, Himmatnagar, Sabrkantha, Gujarat"
                },
                {
                    CourseName: "HSC",
                    percentage: 76.50,
                    address:"Jalaram Mandir Near, Demai Road, Himmatnagar, Sabrkantha, Gujarat"
                },
                {
                    CourseName: "Bechlour Education",
                    percentage: 7.13 + "CGPA",
                    address:"Vgec, Visat, Chandkheda, Ahmedabad, Gujarat"
                }
            ]
        }
    }
    render() {
        return (
            <div className="academic" id="academic">
                <h2 className="title">Academic Details</h2>
                <div className="main-cart">
                    {
                        this.state.data.map(item => (
                            <div className="cart">
                            <h2>{item.CourseName}</h2>
                            <p>school/collage : swastik high school</p>
                            <p>percentage: <strong>{item.percentage} </strong>  </p>
                            <p>address: {item.address}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
