import React, { Component } from 'react'

class Greeting extends Component {
    render() {
        return (
            <div>
                <h2>Hello, {this.props.name}!</h2>
            </div>
        )
    }
}
export default Greeting
