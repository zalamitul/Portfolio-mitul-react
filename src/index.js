import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from './Home/Home';
import Academic from './Academic/Academic';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import About from './About/About';
import Contact from './Contact/Contact';
// import "./App.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <Academic/>
    <Skills/>
    <Projects/>
    <Services/>
    <About/>
    <Contact/>
    <Footer/>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

