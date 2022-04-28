import React, { Component } from "react";
import './signup.css';
import Lottie from "react-lottie-player";
import sm_gif from "../gif/sm_gif.json";



class SignupComponent extends Component {
    render() {
        return (
            <div className="signup_main_component">
                <div className="left">
                    <p className="heading">FIST</p>
                    <hr className="seperator"></hr>
                    <small className="heading_helper">Eveything at Single Place!</small>
                </div>
                <Lottie className="signup_gif" loop animationData={sm_gif} play />
                <div className="right">
                    <div className="form_wrapper">
                        <p className="create_account">Create Account</p>
                        <form className="signup_form">
                            <input className="form-control" type="text" placeholder="Full Name" />
                            <input className="form-control" type="email" placeholder="Email" />
                            <input className="form-control" type="text" placeholder="Mobile Number" />
                            <input className="form-control" type="password" placeholder="Password" />
                            <button class="btn btn-primary">submit</button>
                        </form>
                        <small>Already have an Account? <span>Log In</span></small>
                    </div>

                </div>
            </div>
        );
    }
}

export default SignupComponent;