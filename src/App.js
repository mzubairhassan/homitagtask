import React, {Component}  from 'react';
import { DemoForm } from './Components/Form';
import { BrowserRouter } from 'react-router-dom';

import "./App.css";

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <DemoForm />
        </BrowserRouter>
    );
  }
}

export default App;
