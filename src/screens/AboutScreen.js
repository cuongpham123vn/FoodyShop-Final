import React, { Component } from 'react';
import { MdLocalTaxi } from 'react-icons/md';
import { FaShoppingCart, FaPen, FaSmileBeam, FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

export default class AboutScreen extends Component {
    render() {
        return (
            <div className="abouth2">
                <h2>Our Team</h2>
                <div className="AboutScreen">
                    <div className="info">
                        <img src="images/user.png" alt="user"></img>

                        <p><b>Pham Ngoc Cuong</b></p>
                        <p>Operator and Founder</p>

                    </div>

                    <div className="info">
                        <img src="images/user.png" alt="user"></img>

                        <p><b>Pham Ngoc Cuong</b></p>
                        <p>Developer</p>
                    </div>

                    <div className="info">
                        <img src="images/user.png" alt="user"></img>

                        <p><b>Pham Ngoc Cuong</b></p>
                        <p>Tester</p>
                    </div>
                </div>
                <hr></hr>
                <div className="abouth21">
                    <h2>Our Services</h2>
                </div>
                <div className="info1">
                    <p><MdLocalTaxi />&nbsp;<b>WORLDWIDE DELIVERY</b></p>
                </div>
                <div className="info1">
                    <p><FaShoppingCart />&nbsp;<b>SAFETY CHECKING</b></p>
                </div>
                <div className="info1">
                    <p><FaPen />&nbsp;<b>DIVERSITY</b></p>
                </div>
                <div className="info1">
                    <p><FaSmileBeam />&nbsp;<b>SUPPORT</b></p>
                </div>
                <hr></hr>
                <div className="#">
                    <h1>About Us</h1>
                    <p>We specialize in providing fresh ingredients to ensure food hygiene and safety.</p>
                    <h2>OPEN TIME</h2>
                    <p> Monday - Friday:  8.00 to 18:00</p>
                    <p> Saturday:  9.00 to 21.00</p>
                    <p> Sunday:  10:00 to 21:00</p>
                </div>
                <div className="icon">
                <FaFacebook size={40}/>&nbsp;<FaInstagramSquare size={40}/>&nbsp;<FaTwitter size={40}/>
                </div>
            </div>


        )
    }
}
