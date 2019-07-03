import React from 'react'
//import PoemsData from '../data/PoemsData'
import Authors from '../data/Authors'

class Poem extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //        authors: []
    //     }
    // }

    componentDidMount() {
        console.log(Authors)
        this.setState({
            authors: Authors.then(item => item)
        })
    }

    render() {


        return(
            <div>
                <h3>Authors</h3>
                <ul>
                { 
                    //this.state.authors.map( item => <li> {item} </li>)
                }
                </ul>
            </div>
        )

    }
}
export default Poem
