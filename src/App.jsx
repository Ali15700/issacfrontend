import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Quality from './components/quality/Quality';
import './app.scss';
function App() {
  return (
    <div className="app">
      <Topbar/>
      <Menu/>
      <BrowserRouter>
    <Routes>       
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/quality" element={<Quality/>}/>
    </Routes>
    </BrowserRouter>
      </div>
  
  );
}

export default App;
