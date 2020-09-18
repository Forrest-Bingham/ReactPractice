import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./components/Person"

class App extends Component {
  state = {
    persons: [
      {name: "Steves", age: 26},
      {name: "Thomas", age: 33}
    ]
  }


switchNameHandler = () => {
  console.log("Was Clicked!")
}
render() {
  return (
    <div className="App">
      <h1> Welcome to the people list!</h1>
      <button onClick={ this.switchNameHandler()}>Switch name:</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    </div>
  );
}
}
export default App;

