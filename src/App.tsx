import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/Header';
import {Main} from './components/main/Main';
import {Nav} from './components/nav/Nav';
import { MySkills } from './components/skills/MySkills';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills/>
        </div>
    );
}

export default App;
