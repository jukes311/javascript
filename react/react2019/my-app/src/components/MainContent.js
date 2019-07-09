import React from 'react'

class MainContent extends React.Component {

    render() {
        const firstName = "Chris"
        const lastName = "Salaman"

        return(
            <div className='mainContent'>
                <p>{ `${firstName} ${lastName}`}</p>
            </div>
        )
    }
}

export default MainContent