import React from 'react';


const Table = (props) => (
  <div className=''>
    <div className='table'>
      <div>
        <div className='table__header table__row '>
          <div className=''>Month</div>
          <div className=''>Original loan</div>
          <div className=''>Interest</div>
          <div className=''>Monthly repayment</div>
        </div>
        {props.payments.schedule.map((row, index) => {
          return (
            <div className='table__row ' key={index}>
              <div className='table__ '>{row.month}</div>
              <div className='table__ '>{Math.round(row.splitLoan)}</div>
              <div className='table__ '>{Math.round(row.interest)}</div>
              <div className='table__monthly-repayment'>{Math.round(row.monthlyRepayment)}</div>
            </div>
          )
        })}
        <div className='table__row  table__row--last '>
          <div className='table__ '>Totals</div>
          <div className='table__ '>{props.payments.totals.originalLoan} Eur</div>
          <div className='table__ '>{props.payments.totals.interest} Eur</div>
          <div className='table__monthly-repayment'>{props.payments.totals.monthlyRepayment} Eur</div>
        </div>
      </div>
    </div>
  </div>
);

export default Table;