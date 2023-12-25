import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './Assets/CSS/App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
          <Route path='/blog' Component={Blog} />
        </Routes>
        <Footer />
      </div>
   </BrowserRouter>
  )
}


export default App;