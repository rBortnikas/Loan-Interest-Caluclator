import React from "react";
import { capitalize } from "../utils/utils";

export default class InputField extends React.Component {
  state = {
    value: 0
  };

  handleInputChange = e => {
    const value = e.target.value;
    
    this.setState({ value });
    this.props.handleValueChange(
      parseFloat(value),
      this.props.varType
    );
  };

  componentDidMount = props => {
    this.setState({ value: this.props.defValue });
  };

  render() {
    return (
      <div className="input">
        <p className="input__title">{capitalize(this.props.varType)}</p>
        <input
          className="input__field slider"
          type="range"
          onChange={this.handleInputChange}
          defaultValue={this.props.defValue}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
        />
        <p className="input__value">
          {this.state.value} {this.props.unit}
        </p>
      </div>
    );
  }
}
