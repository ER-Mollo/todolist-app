import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import {useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';
// import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './config/firebase';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path = "/"  index element={<Login/>} />
          <Route path = "/sign-up" element={<Register/>}/>
          <Route path = "/home" element={<Home/>}/> 

        </Routes>

    </Router>
    </div>
  );
}

export default App;
