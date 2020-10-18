
import React, { Component } from 'react';

/* function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => { console.log("I am clicked.") }} />
    </React.Fragment >

  )
} */
const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  handlePlusButton = () => {
    console.log("handlePlusButton")
    console.log(this.state.count)
    this.setState({ count: this.state.count + 1 })
  }
  handleMinusButton = () => {
    console.log("handleMinusButton")
    console.log(this.state.count)
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <React.Fragment><div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}
export default App;
