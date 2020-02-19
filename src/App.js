import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Ebook from "./pages/Ebook";
import EbookStore from "./pages/EbookStore";
import './App.css';

function App() {
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html');
    let fontSize = window.innerWidth / 10;
    fontSize = fontSize > 50 ? 50 : fontSize;
    html.style.fontSize = fontSize + 'px';
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Ebook}/>
        <Route path="/search" component={EbookStore}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
