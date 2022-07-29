import '../css/register.css';
import google from '../img/google.png';
import React,{useState} from "react";
import {Link} from 'react-router-dom';
import {auth, provider} from '../config/firebase'
import {useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';




function Login({setEmail,setPassword,login,googleLog}){

    // const [email, setEmail]= useState('');
    // const [password, setPassword]= useState("");
    
    // let history = useNavigate();

    // const login = (()=>{

    //     signInWithEmailAndPassword(auth, email, password).then(()=>{
    //         history("/home");
    //     }).catch((err)=>{

    //         console.log(err);
    //     })
        
    // })
    // const googleLog = ()=>{
    //     signInWithPopup(auth,provider).then((result)=>{
    //         // alert("successfully logged in")
    //         console.log(result);
    //         // history("/home");
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
        
    // }
    



    return(
        <div className='container'>
            <div className='left'>

            </div>
            <div className='right'>
                <h1>Welcome back</h1>
                <p className='check'>Manage You Task Checklist Easily</p>
        
                <div className="control">
                    <label htmlFor="Email">Email </label><br></br>
                    <input type="email" placeholder="example@eg.com" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="control">
                    <label htmlFor="password">Password: </label><br></br>
                    <input  type="password" placeholder="********" id="pass" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="button" onClick={login}>Login</button><br></br>
                <p>Don't have an account? <Link to = "/sign-up" className='link'>Create one</Link></p>
                <h6>OR</h6>
                <div className="this" onClick={googleLog}><button className="G-button"><img src= {google} className="google"/><div className="word"> Sign in with google</div></button></div>
            </div>
            
        </div>
    )
}

export default Login;