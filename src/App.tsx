import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Main} from './components/main/Main';
import {MySkills} from './components/skills/MySkills';
import {MyWorks} from './components/myWorks/MyWorks';
import {ContactForm} from './components/contactForm/ContactForm';
import {Footer} from './components/footer/Footer';
import {MyExpertises} from './components/myExpertises/MyExpertises';
import {NewSkills} from './components/NewSkill/NewSkills';
import {NewWorks} from './components/newWorks/NewWorks';
import {NewContactForm} from './components/contactForm/NewContactForm';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MyExpertises/>
            <NewSkills/>
            <NewWorks/>
            <NewContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
