import { DatePicker } from 'antd';
import * as React from 'react';

import 'antd/dist/antd.css';
import './App.css';

import logo from './logo.svg';

interface IState {
  message: string;
}

class App extends React.Component<{}, IState> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <DatePicker onChange={console.log} />
      </div>
    );
  }
}

export default App;
