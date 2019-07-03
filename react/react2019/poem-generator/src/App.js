import React from 'react'
import './App.css'
import Poem from './components/Poem'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }

  }

  render() {
    return (
      <div>
        <h1>Poem Generator</h1>
        <Poem />
      </div>
      )
  }
}

export default App
