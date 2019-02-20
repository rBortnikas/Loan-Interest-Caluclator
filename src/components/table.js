import React, { Fragment } from "react";

const Table = props => (
  <Fragment>
    <div className="table">
      <div className="table__header table__row ">
        <div>Month</div>
        <div>Original loan</div>
        <div>Interest</div>
        <div>Monthly repayment</div>
      </div>
      {props.payments.schedule.map((row, index) => {
        return (
          <div className="table__row " key={index}>
            <div>{row.month}</div>
            <div>{Math.round(row.splitLoan)}</div>
            <div>{Math.round(row.interest)}</div>
            <div className="table__monthly-repayment">
              {Math.round(row.monthlyRepayment)}
            </div>
          </div>
        );
      })}
      <div className="table__row  table__row--last ">
        <div>Totals</div>
        <div>{props.payments.totals.originalLoan} Eur</div>
        <div>{props.payments.totals.interest} Eur</div>
        <div className="table__monthly-repayment">
          {props.payments.totals.monthlyRepayment} Eur
        </div>
      </div>
    </div>
  </Fragment>
);

export default Table;
