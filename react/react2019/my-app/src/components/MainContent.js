import React from 'react'

import LearnState from './LearnState'

class MainContent extends React.Component {

    render() {
        const firstName = "Chris"
        const lastName = "Salaman"

        return(
            <div className='mainContent'>
                <p>{ `${firstName} ${lastName}`}</p>
                <LearnState />
            </div>
        )
    }
}

export default MainContent