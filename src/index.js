import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GoogleOAuthProvider} from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="698063505179-u92amnmfjfkk2q3k29psoi5vmogsh1md.apps.googleusercontent.com">
            <App/></GoogleOAuthProvider>;
    </React.StrictMode>
);

reportWebVitals();
