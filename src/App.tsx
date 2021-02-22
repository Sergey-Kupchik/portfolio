import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/Header';
import {Main} from './components/main/Main';
import {Nav} from './components/nav/Nav';
import {MySkills} from './components/skills/MySkills';
import {MyWorks} from './components/myWorks/MyWorks';
import {ContactForm} from './components/contactForm/ContactForm';
import { Footer } from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills/>
            <MyWorks/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
