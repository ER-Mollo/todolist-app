import '../css/register.css';
import google from '../img/google.png';
import React,{useState} from "react";
import {Link} from 'react-router-dom';
import {auth} from '../config/firebase'
import {useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth';
import {provider} from "../config/firebase";


function Login(){

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState("");
    
    let history = useNavigate();

    const login = (()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history("/home");
        }).catch((err)=>{

            console.log(err);
        })
        
    })
    const googleLog = ()=>{
        
        
    }
    



    return(
        <div className='container'>
            <div className='left'>

            </div>
            <div className='right'>
                <h1>Welcome back</h1>
                <p className='check'>Manage You Task Checklist Easily</p>
        
                <div className="control">
                    <label htmlFor="Email">Email </label><br></br>
                    <input placeholder="example@eg.com" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="control">
                    <label htmlFor="password">Password: </label><br></br>
                    <input placeholder="********" id="pass" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="button" onClick={login}>Create  Account</button><br></br>
                <p>Don't have an account? <Link to = "/sign-up" className='link'>Create one</Link></p>
                <h6>OR</h6>
                <button className="G-button" onClick={googleLog}><img src= {google} className="google"/> sign up with google</button>
            </div>
            
        </div>
    )
}

export default Login;