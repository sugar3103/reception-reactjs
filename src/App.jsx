import React from 'react';
import './App.css';
import { withTranslation, Trans } from 'react-i18next';

import HomeEN from './Component/HomeEN';
import HomeJA from './Component/HomeJA';
import NumberPeopleInputJA from './Component/NumberPeopleInputJA';
import NumberPeopleInputEN from './Component/NumberPeopleInputEN';
import DeliveryEN from "./Component/DeliveryEN";
import DeliveryJA from "./Component/DeliveryJA";
import Complete from "./Component/Complete";
import MemberDetails from "./Component/MemberDetails";
import CompanyNameInput from "./Component/CompanyNameInput";
import ComapanyNameInputEN from "./Component/CompanyNameInput/en"
import NameInputEN from "./Component/NameInputEN";
import NameInputJA from "./Component/NameInputJA";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(props) {
  
  return (
    <Router>

      <Switch>
        <Route path="/" exact render={()=> (<HomeEN {...props}/>)}/>
        <Route path="/numberOfPeople=ja" component={NumberPeopleInputJA} />
        <Route path="/numberOfPeople=en" component={NumberPeopleInputEN} />
        <Route path="/lang=ja" component={HomeJA} />
        <Route path="/delivery=en" exact render={()=>(<DeliveryEN {...props}/>)} />
        <Route path="/delivery=ja" component={DeliveryJA} />
        <Route path="/name-input=en" component={NameInputEN} />
        <Route path="/name-input=ja" component={NameInputJA} />
        <Route path="/complete" component={Complete} />
        <Route path="/member-details" component={MemberDetails} />
        <Route path="/company-name" component={CompanyNameInput} />
        <Route path="/company-name-en" component={ComapanyNameInputEN} />
      </Switch>
    </Router>
  );
}

export default withTranslation('common')(App);
