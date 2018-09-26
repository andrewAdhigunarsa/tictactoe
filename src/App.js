import React, { Component } from 'react';
import './App.css';
import Testform from './form'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {  address: '12 Forstyh st',
                    suburb: 'Kingsford',
                    state: 'NSW'
                    };
    this.handler = this.handler.bind(this);
  }
  
  handler(event) {
    event.preventDefault();
    // this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Testform
            handler={this.handler}
            address={this.state.address}
            suburb={this.state.suburb}
            state={this.state.state}
        />
      
      </div>
      
    );
  }
}

export default App;
