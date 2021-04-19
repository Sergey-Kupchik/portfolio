import React, {useState} from 'react';
import './App.scss';
import {Header} from './components/header/Header';
import {Main} from './components/main/Main';
import {Footer} from './components/footer/Footer';
import {MyExpertises} from './components/myExpertises/MyExpertises';
import {NewSkills} from './components/NewSkill/NewSkills';
import {NewWorks} from './components/newWorks/NewWorks';
import {NewContactForm} from './components/contactForm/NewContactForm';
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
function App() {
    let [preloader,setPreloader] = useState(false)
    const callBack =(preloaderCondition:boolean)=>{
        setPreloader(preloaderCondition)
    }
    const classes = useStyles();
    return (
        <div className="App">
            <Header />
            {preloader && <div className={`${classes.root} preloader`}><LinearProgress color="secondary" /></div>}
            <Main/>
            <MyExpertises/>
            <NewSkills/>
            <NewWorks/>
            <NewContactForm setPreloader={callBack}/>
            <Footer/>
        </div>
    );
}

export default App;
