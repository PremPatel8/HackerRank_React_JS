import React from "react";

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    const { employees } = this.props;

    const empList = employees
      .filter(
        (employee) =>
          this.state.input === "" ||
          employee.name.toLowerCase().includes(this.state.input.toLowerCase())
      )
      .map((employee) => (
        <li key={employee.name} data-testid="employee">
          {employee.name}
        </li>
      ));

    return (
      <React.Fragment>
        <div className="controls">
          <input
            value={this.state.input}
            type="text"
            className="filter-input"
            data-testid="filter-input"
            onChange={this.onChangeHandler}
          />
        </div>
        <ul className="employees-list">{empList}</ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
