import React from "react";

//first syntax -- functional component
//functional --> use hooks
// function HelloWorld(props) {
//   return <h1>Hello {props.name}</h1>;
// }

//second syntax -- class component
//use class based approach, use state
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

export default HelloWorld;
