import React from "react";
import "../index.css";

function SingleExpense({ expenseName, amount }) {
  return (
    <>
      <li class="flex justify-between bg-dark-secondary mb-4 p-4 rounded-md text-white">
        <span class="expense-name">{expenseName}</span>
        <span class="expense-amount">{amount}</span>
      </li>
    </>
  );
}

export default SingleExpense;
