import { Component } from 'react'
import './App.css'
import Greeting from './component/Greeting '

class App extends Component {
  state = {
    name: "Anoop"
  }
  render() {
    return (

      <div>
        <Greeting name={this.state.name} />
      </div>

    )
  }
}

export default App
