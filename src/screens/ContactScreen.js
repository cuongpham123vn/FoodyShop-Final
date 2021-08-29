import React, { Component } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default class ContactScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="content1">
                    <div className="main1">
                        <div class="col-inner">
                            <div class="icon-box-img" styles="width:40px"></div>
                            <div class="icon-box-text last-reset">
                                <h3> <FaMapMarkerAlt /> Address:</h3>
                                <p> 319 Ly Thuong Kiet Street, 25 Ward</p>
                                <p> 11 District, HCM City</p>
                            </div>
                        </div>
                        <div class="col-inner">
                            <div class="icon-box-img" styles="width:40px"></div>
                            <div class="icon-box-text last-reset">
                                <h3> <FaPhoneAlt /> Hotline:</h3>
                                <p> <b>1900 190 820</b></p>
                                <p><b>Press</b> 109 - for Bussiness</p>
                                <p><b>Press</b> 103 - for Techinal</p>
                            </div>
                        </div>
                        <div class="col-inner">
                            <div class="icon-box-img" styles="width:40px"></div>
                            <div class="icon-box-text last-reset">
                                <h3> <FaMapMarkerAlt /> Email:</h3>
                                <p> efoodyshop@gmail.com</p>
                                <p> cuongpngcs18568@fpt.edu.vn</p>
                            </div>
                        </div>
                        <hr></hr>
                        <br></br>  <br></br>  <br></br>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input type="text" placeholder="Full name" required value={this.state.value} onChange={this.handleChange} />
                            </label> &nbsp;
                          <label>
                              <input type="text" placeholder="Your comment"/>
                          </label>
                          <br></br>  <br></br>
                            <input type="submit" value="Submit" />
                        </form>
                        <br></br>  <br></br>  <br></br>
                        <form>
                            <label>SIGN UP FOR INFORMATION
                            <br></br>  <br></br>
                                <input type="email" placeholder="Email"/>
                            </label>
                            <br></br>  <br></br>
                            <input type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
