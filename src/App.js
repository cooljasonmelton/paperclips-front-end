import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import SignUp from './components/login_components/SignUp'
import EntryContainer from './components/entry_components/EntryContainer'
import DashboardContainer from './components/dashboard_components/DashboardContainer'
import LineChartContainer from './components/dashboard_components/LineChartContainer'



const App = () => {
    return(
      <BrowserRouter>
        <div className="App" >
          <Navbar/>
          <Redirect exact from="/" to="/login" />
          <Switch>
            <Route exact path="/login" component={SignUp} />
            <Route path="/dashboard" component={DashboardContainer} />
            <Route path="/line-chart" component={LineChartContainer} />
            <Route path="/entry/:entryId" render={(props) => <EntryContainer {...props} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
}



export default (App);




