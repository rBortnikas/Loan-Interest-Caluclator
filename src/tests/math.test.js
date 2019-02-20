import calculatePayments from "../utils/math";

const amount = 1000;
const duration = 4;
const rate = 2;
const payments = calculatePayments(amount, duration, rate);

test("Calculates payment schedule correctly", () => {
  expect(payments.schedule[3]).toEqual({
    interest: 5,
    month: 4,
    monthlyRepayment: 255,
    splitLoan: 250
  });
});

test("Calculates totals correctly", () => {
  expect(payments.totals).toEqual({
    interest: 50,
    monthlyRepayment: 1050,
    originalLoan: 1000
  });
});
