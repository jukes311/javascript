import React from 'react'
import Todos from './Todos'

class MainContent extends React.Component {

    render() {
        return(
            <div>
                <h1>Todos</h1>
                    <Todos />
            </div>
        )
    }
}

export default MainContent