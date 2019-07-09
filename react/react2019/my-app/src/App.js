import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: true,
      gender: '',
      favColor: 'blue'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState( {[name]: checked} ) : this.setState( {[name]: value} )

  }

  render() {
    return (
      <form onSubmit="">
        <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
        <br /> 
        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
        <br />
        <textarea value="some value" onChange={this.handleChange} />
        <br />
        <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange} /> Is Friendly?
        <br />
        <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} /> Male 
        <br />
        <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} /> Female 
        <br />
        <select 
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>

        <br />
        <button>Submit</button>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }
}

export default App
