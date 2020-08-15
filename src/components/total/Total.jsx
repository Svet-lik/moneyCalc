import React from 'react';

export default function Total({resultExpenses,resultIncome,totalBalance}) {
 /* let income = 0;
  let expenses = 0;
  let balance;
  transactions.forEach(item => {
    if (item.add) income += +item.amount
    else expenses += +item.amount;
    balance = income - expenses;
  })*/
  return (
    <section className="total">
      <header className="total__header">
        <h3>Баланс</h3>
        <p className="total__balance">{ totalBalance } ₽</p>
      </header>
      <div className="total__main">
        <div className="total__main-item total__income">
          <h4>Доходы</h4>
          <p className="total__money total__money-income">{ resultIncome } ₽</p>
        </div>
        <div className="total__main-item total__expenses">
          <h4>Расходы</h4>
          <p className="total__money total__money-expenses">{ resultExpenses } ₽</p>
        </div>
      </div>
    </section>
  );
}
