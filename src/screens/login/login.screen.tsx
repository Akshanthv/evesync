import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Event from '../events/event.screen';

import Logon from './logon.screen';


const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoggedInSuccess, setIsLoggedInSuccess] = React.useState<any>();
    const [isLoggedInFailed, setIsLoggedInFailed] = React.useState<any>();

    const login = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        axios.post("http://localhost:8080/evesync/api/v1/users/authenticate", { username: username, password: password })
            .then((response: AxiosResponse<String, String>) => {
                console.log((response.data))
                setIsLoggedInSuccess(response.data);
                setIsLoggedInFailed(response.data);
                if (response.data) {
                    navigate('/event');
                }
            })
    }

    const updateUsername = (e: any) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const goToLogon = () => {
            <Logon />
    }

    return (
        <div id="App" className="App">
            {
                !isLoggedInSuccess &&
                <React.Fragment>
                    <header className="App-header">
                        <title>login Page</title>
                        <h1 id='AppHeader' >Login to Evesync</h1>
                    </header>
                    <div className='App-body'>
                        <div>
                            <input onChange={updateUsername} id='username' name='username' type='text' placeholder='Enter Username or phone no' />
                            <br />
                            <input onChange={updatePassword} id='password' name='password' type='password' placeholder='Enter Password' />
                        </div>
                        <button id='loginButton' onClick={login}>Login</button>
                        <button id='createAccount' onClick={goToLogon}>Create Account</button>
                        {
                            isLoggedInFailed &&
                            <h1>Login Failed</h1>
                        }
                    </div>
                </React.Fragment>
            }
            {
                isLoggedInSuccess &&
                <Event />
            }

        </div>
    );
}

export default Login;
