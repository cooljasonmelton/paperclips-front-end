import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Bottom from './components/Bottom'
import SignUp from './components/login_components/SignUp'
import EntryContainer from './components/entry_components/EntryContainer'
import DashboardContainer from './components/dashboard_components/DashboardContainer'




const App = () => {
    return(
      <BrowserRouter>
        <div className="App" >
          <Navbar/>
          {/* <Redirect exact from="/" to="/login" /> */}
          <Switch>
            <Route exact path="/login" component={SignUp} />
            <Route path="/dashboard" component={DashboardContainer} />
            <Route path="/entry/:entryId" render={(props) => <EntryContainer {...props} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
}



export default (App);




