import React, { Component } from 'react'
import "./Contact.css"
export default class Contact extends Component {
    render() {
        return (
            <div class="contact" id="contact">
                <h2 class="title">contact</h2>
                <div class="ccontainer">
                    <h1>let's talk</h1>
                    <div class="cform">
                        <form action="mailto:zalmitul@gmail.com">
                            <input type="text" placeholder="Your name" id="name" name="name" required />
                            <hr />
                            <input type="email" placeholder="Email" id="email" name="email" required />
                            <hr />
                            <input type="text" placeholder="subject" id="sub" name="subject" />
                            <hr />
                            <input type="text" id="message" placeholder="Message" name="body" />
                            <hr />
                            <input type="submit" id="submit" name="submit" value="submit now" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
