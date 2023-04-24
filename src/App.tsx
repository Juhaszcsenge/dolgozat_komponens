import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header';
import Fooldal from './Pages/Fooldal';
import Hibajelentes from './Pages/Hibajelentes';
import Karakterek from './Pages/Karakterek';
import Footer from './Components/Footer';
import Header from './Components/Header';

class App extends Component {
  render(): React.ReactNode {
      return <div>
              <Navbar/>
              {/* <Header/> */}
              <Routes>
        <Route path='/'  element={<Fooldal></Fooldal>} />
        <Route path='Hibajelentes' element={<Hibajelentes></Hibajelentes>}  />
        <Route path='Karakterek' element={<Karakterek></Karakterek>}  />
      </Routes>
      <Footer/>
      </div>
  }
}

export default App;