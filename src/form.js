import React, { Component } from 'react';
import './App.css';

class Testform extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
                        address: '',
                        suburb: '',
                        state: 'test',
                    };
    
        // this.handleChange = this.handleChange.bind(this);
    }


    // handleChange(event) {
    //     this.setState({ [event.target.name]: event.target.value });
    //   }


    render() {
      return (

        
        <div className="form">

        <h1>parent parent state</h1>
        <p>address = {this.props.address} </p>
        <p>suburb = {this.props.suburb} </p>
        <p>state = {this.props.state} </p>
        <h1>this prop state</h1>
        <p>address = {this.state.address} </p>
        <p>suburb = {this.state.suburb} </p>
        <p>state = {this.state.state} </p>
          <span class="label">street address</span>
          <input className='text-field' 
                id=''
                type='text'
                name='address'
                value={this.props.address}
                // onChange={this.handleChange}   
                onChange={this.props.handler} 
                />
          <span class="label">suburb</span>
          <input className='text-field' 
                id=''
                type='text'
                name='suburb'
                value={this.props.suburb}
                // onChange={this.handleChange}  
                onChange={this.props.handler} 
                />
          <span class="label">state</span>
          <input className='text-field' 
                id=''
                type='text'
                name='state'
                value={this.props.state}
                // onChange={this.handleChange}  
                onChange={this.props.handler}  
                />
        
        </div>
        
      );
    }
  }

export default Testform;