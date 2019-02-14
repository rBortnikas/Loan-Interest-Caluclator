import React from 'react';
import { capitalize } from '../utils/utils';

export default class InputField extends React.Component {
  state = {
    value: 0
  }
  handleInputChange = (e) => {
        if(e.target.value === '' || e.target.value === 'e' || e.target.value === '-') {
          console.log('needs fixing');
        } else {
          this.props.handleValueChange(parseFloat(e.target.value), this.props.varType);
          this.setState({value: e.target.value});
        }
  };

  componentDidMount = (props) => {
    this.setState({value: this.props.defValue});
  }

  render() {
    return (
      <div className='input'>
        <p className="input__title">{capitalize(this.props.varType)}</p>
        <input
          className='input__field slider'
          type='range'
          onChange={this.handleInputChange}
          defaultValue={this.props.defValue}
          // min={this.props.varType === 'duration' ? 1 : 0}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
        >
        </input>
        <p className='input__value'>{this.state.value} {this.props.unit}</p>
      </div>
    )};

};