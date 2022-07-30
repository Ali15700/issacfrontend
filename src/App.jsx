import React from "react";
import {BrowerRouter as Router,Route,Switch} from "react-router-dom";
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
    <Router> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/quality" component={Quality}/>
      </Switch>
    </Router>
      <Quality/>
      </div>
  
  );
}

export default App;
