import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';


class App extends Component {
render() {
  return (
    <div className="App">
      <UserGreeting/>
      {/*<ParentComponent/>
      <Greet name="Bruce"/>}
      {<Greet name="Clark"/>}
  {<Welcome />
      <Greet name="Diana" heroName='Wonder Woman'/>*/}
      {/*<FunctionClick/>
      <ClassClick/>
      <EventBind/>*/}
      
      
    </div>
  );
}
} 

export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


/*class App extends component {
  render(){
    return (
      <div className="App">
        <EventBind/>

      </div>
    )
  }
}*/