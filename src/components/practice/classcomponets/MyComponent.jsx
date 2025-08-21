import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated!");
  }

  componentWillUnmount() {
    console.log("Component will be removed!");
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
export default MyComponent;