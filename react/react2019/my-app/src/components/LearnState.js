import React from 'react'

class LearnState extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Name state from LearnState.js',
            count: 0
        }

    }

    handleClick() {
        console.log('clicked.')
    }

    render() {
        return(
            //JSX
            <div>
                <h1>{this.state.count}</h1>
                {this.state.name}
                <button onClick={this.handleClick}>Increment Count</button>
            </div>
        )
    }

}

export default LearnState 