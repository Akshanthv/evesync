import React from 'react';
import logo from './logo.svg';
import axios, {AxiosResponse } from 'axios';
import './App.css';
import { renderHook } from '@testing-library/react';
import homePage from './homePage';
import { rootCertificates } from 'tls';
import errorPage from './errorPage';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
function App() {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] =  React.useState('');
  const [isLoggedInSuccess, setIsLoggedInSuccess] = React.useState<any>(false);
  const [isLoggedInFailed, setIsLoggedInFailed] = React.useState<any>(false);

  const login=()=>{
    console.log("Username:",username);
    console.log("Password:",password);
    axios.post("http://localhost:8080/evesync/api/v1/users/authenticate",{username:username,password:password})
    .then((response:AxiosResponse<String, String>)=>{
      console.log((response.data))
      setIsLoggedInSuccess(response.data);
      setIsLoggedInFailed(!response.data);
      // if (response.data )
      // console.log("yoooooooo")
      // else
      // console.log("invalid username or password")
    })
    
    const element = <h1>Login Successfull</h1>;

    {
      isLoggedInSuccess &&
        console.log("yoooooooo")
        ReactDOM.render(element,document.getElementById('AppHeader')) 
    }
    {  
      isLoggedInFailed &&
       console.log("invalid username or password")
      
    }

       
  }

  const updateUsername = (e: any)=>{
    setUsername(e.target.value);
  }

  const updatePassword = (e: any)=>{
    setPassword(e.target.value);
  }

  return (
    <div id="App" className="App">
      <header className="App-header">
        <title>login Page</title>
        <h1 id='AppHeader' >Login to Evesync</h1>
      </header>
      <body className='App-body'>
        <div>
        <input onChange={updateUsername} id='username' name='username' type='text' placeholder='Enter Username or phone no' />
        </div>
        <div>
        <input onChange={updatePassword} id='password' name='password' type='password' placeholder='Enter Password'/>
        </div>
        <button id='loginButton' onClick={login}>Login</button>
        <a href='createAccount.tsx'>Create Account</a>
      </body>
    </div>
  );
}

export default App;
