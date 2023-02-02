import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { render } from '@testing-library/react';

function App() {

    return (   
        <div className="App">
            <header className="App-header">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                    console.log(credentialResponse.credential);
                    var decoded = jwt_decode(credentialResponse.credential);

                    console.log(decoded)
                }}
                    onError={() => {
                    console.log('Login Failed');
                }}/>
            </header>
        </div>

);
}

export default App;
