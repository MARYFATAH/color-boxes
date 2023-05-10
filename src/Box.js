import React from "react";
import "./Box.css";

class Box extends React.Component {
  static defaultProps = {
    colors: ["red", "green", "blue", "yellow", "orange", "purple", "pink", "cyan", "magenta", "brown"]
  };

  constructor(props) {
    super(props);
    this.state = {
      color: this.choice(this.props.colors)
    };
    this.change = this.change.bind(this);
  }

  choice(arr) {
    let numIndex = Math.floor(Math.random() * arr.length);
    return arr[numIndex];
  }

  change() {
    this.setState(st => {
      return {
        color: this.choice(this.props.colors)
      };
    });
  }

  render() {
    return (
      <div className="Box" onClick={this.change} style={{ backgroundColor: this.state.color }}></div>
    );
  }
}

export default Box;

