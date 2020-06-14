import React from "react";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: "",
      inputVal: "",
      appendBtnState: true,
      undoBtnState: true,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.appendClickHandler = this.appendClickHandler.bind(this);
    this.undoClickHandler = this.undoClickHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

  changeHandler(e) {
    if (e.target.value) {
      this.setState({ appendBtnState: false, inputVal: e.target.value });
    } else {
      this.setState({ appendBtnState: true, inputVal: "" });
    }
  }

  appendClickHandler() {
    this.setState({
      textContent: this.state.textContent + " " + this.state.inputVal,
      undoBtnState: false,
      inputVal: "",
      appendBtnState: true,
    });
  }

  undoClickHandler() {
    var words = this.state.textContent.split(" ");

    if (this.state.textContent) {
      if (words.pop() === "") {
        words.pop();
      }

      this.setState(
        {
          textContent: words.join(" "),
        },
        () => {
          if (this.state.textContent === "") {
            this.setState({ undoBtnState: true });
          }
        }
      );
    } else {
      this.setState({ undoBtnState: true });
    }
  }

  textChangeHandler() {
    if (this.state.textContent) {
      this.setState({
        undoBtnState: false,
      });
    } else {
      this.setState({
        undoBtnState: true,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input
            value={this.state.inputVal}
            onChange={this.changeHandler}
            className="word-input"
            type="text"
            data-testid="word-input"
          />
          <button
            disabled={this.state.appendBtnState}
            onClick={this.appendClickHandler}
            data-testid="append-button"
          >
            Append
          </button>
          <button
            disabled={this.state.undoBtnState}
            onClick={this.undoClickHandler}
            data-testid="undo-button"
          >
            Undo
          </button>
        </div>
        <div className="text-field" data-testid="text-field">
          {this.state.textContent}
        </div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
