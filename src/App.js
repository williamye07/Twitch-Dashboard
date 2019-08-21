import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Games from './components/games';
import Header from './components/headers';
import Streams from "./components/streams";
import GameStreams from "./components/gamestreams";

import "./App.css";


function App() {
  return (
    <Router>
    <Header />
    <Route exact path='/' component={Games} />
    <Route exact path='/top-streams' component={Streams} />
    <Route exact path='/game/:id' component={GameStreams} />
    </Router>
  );
}

export default App;
