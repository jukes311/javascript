import React from 'react'

class LearnState extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Name state from LearnState.js'
        }

    }

    render() {
        return(
            //JSX
            <div>
                {this.state.name}

            </div>
        )
    }

}

export default LearnState 