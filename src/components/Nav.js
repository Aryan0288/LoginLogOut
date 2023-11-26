import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'
import toast from 'react-hot-toast';


export default function Nav(props) {
    let Login = props.IsLoggedIn;
    let setLogin = props.setIsLoggedIn;
    return (
        <div className='flex justify-between  items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <Link to="/">
                <img src={logo} width={160} height={32} loading='lazy' />
            </Link>


            <nav>
                <ul className='flex gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                        
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* login-signup and dashboard */}

            <div className='flex ml-5 gap-3 mr-3'>
                {!Login &&
                    <Link to="/Login">
                        <button 
                        // onClick={() => {
                        //     setLogin(true);
                        //     toast.success("LoggedIn Successfully");
                        // }}
                        >
                            Login
                        </button>
                    </Link>
                }
                {
                    !Login &&
                    <Link to="/SignUp">
                        <button 
                        // onClick={() => {
                        //     console.log("click sinup");
                        //     setLogin(true);
                        //     toast.success("SignUp Successfully!");
                        // }}
                        >
                            SignUp
                        </button>
                    </Link>
                }
                {
                    Login &&
                    <Link to="/">
                        <button onClick={() => {
                            setLogin(false);
                            toast.success("LoggedIn Successfully!");
                        }}>
                            LogOut
                        </button>
                    </Link>
                }
                {
                    Login &&
                    <Link to="/DashBoard">
                        <button>
                            DashBoard
                        </button>
                    </Link>
                }
            </div>
        </div>


    )
}
