import React from 'react';
import InputField from './InputField';
import Table from './table';
import calculatePayments from '../utils/math';

export default class Calculator extends React.Component {

  state = {
    amount: 1000,
    duration: 4,
    rate: 2,
    payments: {
      schedule: [],
      totals: {}
    }
  };

  handleValueChange = (value, type) => {
      this.setState(() => ({[type]:value}), this.calculatePayments);
  };

  calculatePayments = () => {
    const { amount, duration, rate } = this.state;
    const payments = calculatePayments(amount, duration, rate);
    this.setState({ payments });
  }

  componentDidMount = () => {
    this.calculatePayments();
  };

  render() {
    return (
      <div className=''>
        <div className=''>
          <h1 className='mainTitle'>Loan interest calculator</h1>
          <p className='infoText'>Interest is charged daily on outstanding balance.</p>
            <div className='inputs'>
              <div className="inputs__input">
                <InputField
                  varType='amount'
                  unit='Eur'
                  handleValueChange={this.handleValueChange}
                  defValue={this.state.amount}
                  min={500}
                  max={10000}
                  step={100}
                  key='amount'
                />
              </div>
              <div className='inputs__input inputs__input--two'>
                <div className='inputs__input__two'>
                  <InputField
                    varType='duration'
                    unit='Months'
                    handleValueChange={this.handleValueChange}
                    defValue={this.state.duration}
                    key='duration'
                    min={2}
                    max={18}
                    step={1}
                    />
                </div>
                <div className='inputs__input__two'>
                  <InputField
                    varType='rate'
                    unit='%'
                    handleValueChange={this.handleValueChange}
                    defValue={this.state.rate}
                    key='rate'
                    min={0.5}
                    max={7.5}
                    step={0.1}
                    />
                </div>
              </div>

            </div>
            <Table payments={this.state.payments}/>
        </div>
      </div>
    )};
}
