import React from "react";

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", outputValue: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value }, this.handleOutput);
  }

  handleOutput() {
    const translations = this.props.translations;

    if (translations.has(this.state.inputValue)) {
      this.setState({ outputValue: translations.get(this.state.inputValue) });
    } else {
      this.setState({ outputValue: "" });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input
              value={this.state.inputValue}
              onChange={this.handleChange}
              type="text"
              className="text-input"
              data-testid="text-input"
            />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input
              value={this.state.outputValue}
              type="text"
              className="text-output"
              data-testid="text-output"
              readOnly
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
