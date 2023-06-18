import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import About from './components/About';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<><News key="g" country="in" pageSize={9} category="general"/><Footer/></>}></Route>       
        <Route exact path="/business" element={<><News key="b" country="in" pageSize={9} category="business"/><Footer/></>}></Route>       
        <Route exact path="/entertainment" element={<><News key="e" country="in" pageSize={9} category="entertainment"/><Footer/></>}></Route>       
        <Route exact path="/health" element={<><News key="h" country="in" pageSize={9} category="health"/><Footer/></>}></Route>       
        <Route exact path="/science" element={<><News key="sc" country="in" pageSize={9} category="science"/><Footer/></>}></Route>       
        <Route exact path="/sports" element={<><News key="sp" country="in" pageSize={9} category="sports"/><Footer/></>}></Route>       
        <Route exact path="/tech" element={<><News key="t" country="in" pageSize={9} category="technology"/><Footer/></>}></Route>       
        <Route exact path="/about" element={<About/>}></Route>       
        </Routes>
        
      </div>
      </Router>
    )
  }
}

