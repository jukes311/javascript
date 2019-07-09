import React from 'react'

class LearnState extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Name state from LearnState.js',
            count: 0
        }

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
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