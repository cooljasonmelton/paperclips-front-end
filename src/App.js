import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Title from './components/Title'
import Bottom from './components/Bottom'
import Landing from './components/login_components/Landing'



function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Title />

        <Navbar/>
        {/* Switch between 'landing' 'dashboard' and 'write' */}

        <Landing/>

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