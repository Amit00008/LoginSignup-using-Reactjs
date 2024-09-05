import React, { useState } from 'react'
import './test.css'
import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const TestWeb = () => {

    const [action, setAction] = useState("Sign up")
  return (


    <div>
           <div className='container'>
            <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="Email" placeholder="Email"/>
                </div>
                
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="Password" placeholder="Password"/>
                </div>
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="Username" placeholder="Username"/>
                </div>}
                

           
           </div>

           {action==="Sign up"?<div className="terms">By clicking the Signup button, you agree to our <span>Terms & Conditions</span> and <span>Privacy Policy</span></div>:<div className="forgot-password">Lost password?<span>Click here</span>
            </div>}
           
           <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Signup</div>
            <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
        </div>
        
    );
};
export default TestWeb
