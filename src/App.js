import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar'
import Title from './components/Title'
import Bottom from './components/Bottom'


function App() {
  return (
    <div className="App" >
      <Title />
      <Navbar/>
      {/* Switch between 'dashboard' and 'write' */}

      <Bottom/>
    </div>

  );
}

export default App;
