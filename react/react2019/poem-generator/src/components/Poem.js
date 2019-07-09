import React from 'react'
// import PoemsData from '../data/PoemsData'
import Authors from '../data/Authors'

class Poem extends React.Component {
    constructor() {
        super()
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        Authors.then(data => {
            const arrayOfAuthors = data.map(item => <li> {item} </li>)
            this.setState({authors: arrayOfAuthors})
        })
    }

    render() {


        return (
            <div>
                <h3>Authors</h3>
                <ul> {this.state.authors} </ul>
            </div>
        )

    }
}
export default Poem
