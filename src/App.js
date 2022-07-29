import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import './App.css';


import Login from './components/login';
import Register from './components/register';
import Home from './components/home';


import {useNavigate} from 'react-router-dom';

import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
 import {createUserWithEmailAndPassword,updateProfile,signInWithPopup, signOut, } from 'firebase/auth';
import {auth,provider} from './config/firebase';


import {Route, Routes} from 'react-router-dom'

function App() {

  const [fullname,setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState("");
    const [user,setUser] = useState({});
    
    useEffect( () => {
      onAuthStateChanged(auth, (user) => {
        console.log(user);
        setUser(auth.currentUser);
      })
    }, [])
    console.log(user);
    let history = useNavigate();

    const register = async()=>{

          await createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            console.log("start")
            console.log(userCredential)
            setUser(()=>({...userCredential.user}));

             updateProfile(auth.currentUser, {displayName:fullname}).then(
              promise =>{
                setUser(auth.currentUser);
              }
             ).catch(
              error => {
                alert(error.message)
              }
             );

            alert(fullname + " successfully regerstered")
            history("/home");
        }).catch(
          error =>{
            alert(error.message);

            console.log(error)
        })
        
    }
    const logout = () => {
      signOut(auth);
      history('./');
      setUser("")
    };

    const login = (()=>{

      signInWithEmailAndPassword(auth, email, password).then(()=>{
        setUser(auth.currentUser);  
        history("/home");
          
      }).catch((err)=>{
          alert(err);
          console.log(err);
      })
      
  })


  const googleLog = ()=>{
    signInWithPopup(auth,provider).then((result)=>{
        // alert("successfully logged in")
        console.log(result);
        setUser(result.user)
        history("/home");
    }).catch((err)=>{
        console.log(err);
    })
    
}

    
  return (
    <div className="App">
      
        <Routes>

          <Route path = "/"  index element={<Login setName={setName} setEmail={setEmail} setPassword={setPassword} fullname={fullname} user={user} login={login} googleLog={googleLog}/>} />

          <Route path = "/sign-up" element={<Register setName={setName} setEmail={setEmail} setPassword={setPassword} fullname={fullname} user={user} register={register} googleLog={googleLog}/>}/>

          <Route path = "/home" element={<Home fullname={fullname} user={user}  logout={logout}/> }/> 

        </Routes>

    
    </div>
  );
}

export default App;
