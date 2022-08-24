import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Pages/home/Home';
import Contact from './Pages/contact/Contact';
import About from './Pages/about/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
   
    <Router>
    <div className="App">
      <Header />
      <Hero />

      <Route path="/" exact component={Home} />
      <Route path="/contact-us"  component={Contact}/>
      <Route path="/about" component={About} />

     

      
    </div>
  </Router>
  
  
  );
}

export default App;
