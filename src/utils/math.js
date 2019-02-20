export default (amount, duration, percentRate) => {
  let schedule = [];

  const splitLoan = amount / duration;
  const rate = percentRate / 100;

  let remaining = amount;
  let totalInterest = 0;

  for (let month = 1; month <= duration; month++) {
    schedule.push({
      month,
      splitLoan,
      interest: remaining * rate,
      monthlyRepayment: splitLoan + remaining * rate
    });

    totalInterest += remaining * rate;
    remaining = amount - splitLoan * month;
  }

  const totals = {
    originalLoan: Math.round(amount),
    interest: Math.round(totalInterest),
    monthlyRepayment: Math.round(amount + totalInterest)
  };

  return { schedule, totals };
};
