import React, { useState } from "react";
import google from '../img/google.png';
import {Link} from 'react-router-dom';
import '../css/register.css';


import {auth} from '../config/firebase';
import {useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth';



function Register(){
    const [name,setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState("");

    let history = useNavigate();

    const register = ()=>{

        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            history("/home");
        }).catch((error)=>{
            alert(error);
            console.log(error)
        })
        
    }


    return(
        <div className="container">
            <div className="left">
                
            </div>
            <div className="right">
                <h1>Welcome </h1>
                <span className="check">Manage You Task Checklist Easily</span>
                <div className="control">
                    <label htmlFor="name">Full Name: </label><br></br>
                    <input placeholder="Enter your Full Names" id="name"onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="control">
                    <label htmlFor="email">Email </label><br></br>
                    <input placeholder="example@eg.com" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="control">
                    <label htmlFor="pass">Password: </label><br></br>
                    <input type="password" placeholder="*********" id="pass" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="button" onClick={register}>Create  Account</button><br></br>
                <span>Already have an account? <Link to='/' className="link">Log in</Link></span>
                <h6>OR</h6>
                <button className="G-button"><img src= {google} className="google"/> sign up with google</button>
                
            </div>
            
        </div>
    )
}

export default Register;