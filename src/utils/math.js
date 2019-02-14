

export default (amount, duration, rate) => {
  // const re = /^[1-9]\d*$/;
  // if (amount === '' ||
  //     duration === '' ||
  //     rate === '' ||
  //     re.test(amount) ||
  //     re.test(duration) ||
  //     re.test(rate)) {
  //       return;
  //     }
  let schedule = [];
  for (let i = 1; i <= duration; i++) {
    schedule.push({
      month: i,
      splitLoan: amount/duration,
      interest: (amount - amount/duration * (i - 1)) * rate/100,
      monthlyRepayment: amount/duration + ((amount - amount/duration * (i - 1)) * rate/100)
    });
  }
  const totalInterest = schedule.reduce((a, b) => ({interest: a.interest + b.interest})).interest;
  const totals = {
    originalLoan: Math.round(amount),
    interest: Math.round(totalInterest),
    monthlyRepayment: Math.round(amount + totalInterest)
  };

  return { schedule, totals };
}