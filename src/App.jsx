import React from 'react';
import './App.css';
import HomeEN from './Component/HomeEN';
import HomeJA from './Component/HomeJA';
import NumberPeopleInput from './Component/NumberPeopleInput';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeEN} />
        <Route path="/numberOfPeople" component={NumberPeopleInput} />
        <Route path="/lang=ja" component={HomeJA} />
      </Switch>
      

    </Router>
  );
}

export default App;
