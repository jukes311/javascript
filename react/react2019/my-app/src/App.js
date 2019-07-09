import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    return (
      <div>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
        <br /> 
        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </div>
    )
  }
}

export default App
