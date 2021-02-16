import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { usersArraay, UserX} from './hoc/Users';
import {HideValue, SmarUSE, UsersNew} from './hoc/UsersArray';

ReactDOM.render(
    <React.StrictMode>
        <App />
        {/*<UserX users={usersArraay}/>*/}

        {/*<UsersNew users={usersArraay}/>*/}


    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
