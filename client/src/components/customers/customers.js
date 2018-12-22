import React, { Component } from 'react';
import './customers.css';

class Customer extends Component {
  constructor(){
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount(){
    fetch('/customers')
      .then(res=>res.json())
      .then((customers) => this.setState({customers}, ()=>console.log('Customers fetched')));
  }

  render() {
    return (
      <div>
        <h3>Customers</h3>
        <ul>
          {this.state.customers.map((customer)=>{
            return <li key={customer.id}>{customer.firstName}{customer.lastName}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Customer;
