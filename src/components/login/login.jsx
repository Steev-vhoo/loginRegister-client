import React from "react";
import './login.css'
import '../../App.css'
import { Link, NavLink } from "react-router-dom";

//import our assets
import video from '../../loginassets/fam.mp4'
import logo from '../../loginassets/logo.png'
import { FaUserShield } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {


    
    return (
        <div className="loginPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className="title">Be <span>You</span> In Full</h2>
                        <p>Putting your best self first</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Don't have an account?</span>
                        <Link to={'/register'}>
                            <button className="btn">Sign Up</button></Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="logo image"/>
                        <h3>Welcome Back!</h3>
                    </div>
                    <form action="" className="form grid">
                        <span className="showMessage">Login status will go here</span>
                        <div className="inputDiv">
                            <label htmlFor="Username">Username</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id="username" placeholder="Enter Username" />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="Password">Password</label>
                            <div className="input flex">
                                <FaLock className="icon" />
                                <input type="password" id="Password" placeholder="Enter Password" />
                            </div>
                        </div>
                        <button type="submit" className="btn flex">
                            <span>Login</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>
                        <span className="forgotPassword">Forgot your password? <a href="">Click Here</a></span>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Login