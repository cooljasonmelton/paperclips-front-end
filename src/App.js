import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Title from './components/Title'
import Bottom from './components/Bottom'
import SignUp from './components/login_components/SignUp'
import EntryContainer from './components/entry_components/EntryContainer'
import DashboardContainer from './components/dashboard_components/DashboardContainer'



function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Title />
        <Navbar/>

        {/* <Redirect exact from="/" to="/login" /> */}
        <Route exact path="/login" component={SignUp} />
        
        {/* Switch between 'landing' 'dashboard' and 'write' */}

        <Switch>
          <Route path="/dashboard" component={DashboardContainer} />
          {/* <Route path="/" component={null} />
          <Route path="/" component={null} /> */}
          <Route path="/entry/:entryId" render={(props) => <EntryContainer {...props} /> } />
        </Switch>

        <Bottom/>
      </div>
    </BrowserRouter>

  );
}

export default App;


{/* <Redirect exact from="/" to="/login" />
  <Route exact path="/login" component={Login} />

<Switch>
  <Route path="/dashboard" component={Dashboard} />
  <Route path="/note/new" component={NoteFormContainer} />
  <Route path="/note/prev/:noteId" component={BigNoteContainer} /> } />
  <Route path="/note/:noteId" render={(props) => <EditFormContainer {...props} /> } />
</Switch> */}