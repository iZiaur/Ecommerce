import "./Login.css"
import { useState } from "react";

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

function Login({setIsAuth}){
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })

    async function login(){
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        });

        const responseData = await response.json();

        if (responseData.success) {
            localStorage.setItem("auth-token", responseData.token);
            setIsAuth(true);
        } else {
            alert(responseData.errors || "Invalid Credentials");
        }
    }

    function changeHandler(e){
        setformdata({
            ...formdata,[e.target.name]:e.target.value
        })
    }

    return (
        <div className="loginsignup">
            <div className="loginsignupcontainer">
                <h1>Admin Login</h1>
                <div className="loginsignupfields">
                    <input name="email" value={formdata.email} onChange={changeHandler} type="email" placeholder="Email Address"/>
                    <input name="password" value={formdata.password} onChange={changeHandler} type="password" placeholder="Password"/>
                </div>
                <button onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;
