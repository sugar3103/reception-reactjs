import React from 'react';
import './App.css';
import HomeEN from './Component/HomeEN';
import HomeJA from './Component/HomeJA';
import NumberPeopleInput from './Component/NumberPeopleInput';
import Delivery from "./Component/Delivery";
import Complete from "./Component/Complete";
import MemberDetails from "./Component/MemberDetails";
import KeyBoard from "./Component/Keyboard";
import KeyBoardEn from "./Component/Keyboard/en"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact component={HomeEN} />
        <Route path="/numberOfPeople" component={NumberPeopleInput} />
        <Route path="/lang=ja" component={HomeJA} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/complete" component={Complete} />
        <Route path="/member-details" component={MemberDetails} />
        <Route path="/keyboard" component={KeyBoard} />
        <Route path="/keyboard_en" component={KeyBoardEn} />
      </Switch>
    </Router>
  );
}

export default App;
