import "./css/LoginSignup.css"
import { useState } from "react";
function LoginSignUp(){
    const[state,setstate]=useState("Login");
    const [formdata,setformdata]=useState({
        username:"",
        password:"",
        email:""
    })

    async function login(){
        console.log("lg",formdata);
    }









     async function signup(){
        console.log("sg",formdata);
        
    }

    function changeHandler(e){
        setformdata({
            ...formdata,[e.target.name]:e.target.value
        })
    }

    
    return (
        <div className="loginsignup">
            <div className="loginsignupcontainer">
                <h1>{state}</h1>
                <div className="loginsignupfields">
                    {state==="Sign Up"?<input name="username" value={formdata.username} onChange={changeHandler}type="text" placeholder="Your Name" />:<></>}
                    <input name="email" value={formdata.email} onChange={changeHandler} type="email" placeholder="Email Address"/>
                    <input name="password" value={formdata.password} onChange={changeHandler} type="password" placeholder="Password"/>

                </div>
                <button onClick={(state==="Sign Up")?(()=>signup()):(()=>login())}>Continue</button>
                {state==="Sign Up"? <p className="loginsignup-login">Already have an account?<span onClick={()=>setstate("Login")}>Login here</span></p>:<p className="loginsignup-login">Create an Account <span onClick={()=>setstate("Sign Up")}>Click here</span></p>}
               
                
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By Continuing, I agree to terms of use & privacy policy</p>
                </div>
            </div>





        </div>
    )
}

export default LoginSignUp;