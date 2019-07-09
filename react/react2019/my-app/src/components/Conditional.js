import React from 'react'

function Conditional(props) {
    return(
        <div>
            <p>Header</p>
            {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about Conditional Rendering</h1>}
            <p>Footer</p>
        </div>
    )
}

export default Conditional
