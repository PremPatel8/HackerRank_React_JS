import React from "react";

class CycleCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.count + 1 < this.props.cycle) {
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}
        data-testid="cycle-counter"
        style={{ fontSize: "1rem", width: 120, height: 30 }}
      >
        {this.state.count}
      </button>
    );
  }
}

export default CycleCounter;
