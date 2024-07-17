import React from "react";
import './register.css'
import '../../App.css'
import { Link, NavLink } from "react-router-dom";

import video from '../../loginassets/fam.mp4'
import logo from '../../loginassets/logo.png'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineSwapRight } from "react-icons/ai";

const Register = () => {
    return (
        <div className="registerPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className="title">Be <span>You</span> In Full</h2>
                        <p>Putting your best self first</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Already have an account?</span>
                        <Link to={'/login'}>
                            <button className="btn">Login</button></Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="logo image" />
                        <h3>Let Us Know You</h3>
                    </div>
                    <form action="" className="form grid">
                        <div className="inputDiv">
                            <label htmlFor="Firstname">Firstname</label>
                            <div className="input flex">
                                <FaUser className="icon" />
                                <input type="text" id="Firstname" placeholder="Enter Your Firstname" />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="Lastname">Lastname</label>
                            <div className="input flex">
                                <FaUser className="icon" />
                                <input type="text" id="Lastname" placeholder="Enter Your Lastname" />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="Username">Username</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id="username" placeholder="Enter Username" />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="Email">Email</label>
                            <div className="input flex">
                                <MdEmail className="icon" />
                                <input type="text" id="Email" placeholder="Enter Email" />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="Password">Password</label>
                            <div className="input flex">
                                <FaLock className="icon" />
                                <input type="password" id="Password" placeholder="Enter Password" />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="Password">Confirm Password</label>
                            <div className="input flex">
                                <FaLock className="icon" />
                                <input type="password" id="Password" placeholder="Confirm Password" />
                            </div>
                        </div>
                    </form>
                    <div className="TandC">
                            <label htmlFor=""><input type="checkbox" id="checkbox" placeholder="" />I agree to the terms & conditions</label>
                        </div>
                        <button type="submit" className="btn flex">
                            <span>Register</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>
                </div>
            </div>
        </div>
    )
}


export default Register