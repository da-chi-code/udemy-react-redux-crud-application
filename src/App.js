import React from 'react';
import propTypes from 'prop-types';

/* function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => { console.log("I am clicked.") }} />
    </React.Fragment >

  )
} */
const App = () => {
  const profiles = [{
    name: "Taro", age: 10
  }, {
    name: "Hanako", age: 5
  },
  {
    name: "NoName"
  }

  ]
  return (<div>{
    profiles.map((profiles, index) => {
      return <User name={profiles.name} age={profiles.age} key={index} />
    })
  }

  </div>)
}

const User = (props) => {
  return <div>Hi, I am {props.name} ,and {props.age}years old</div>
}
User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}
export default App;
