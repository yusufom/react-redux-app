import './App.css';
import { Component } from 'react';
import NewComp from './components/NewComp';


class App extends Component {
  styles = {
    fontStyle: "bold",
    color: "teal"
  }
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome to Simplilearn</h1>
        <NewComp />
      </div>
    )
  }
}

export default App;

