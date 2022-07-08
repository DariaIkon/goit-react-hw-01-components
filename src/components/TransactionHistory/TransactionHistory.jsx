import React from "react";
import propTypes from "prop-types";
import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  const component = items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <td >{type}</td>
            <td>{amount }</td>
        <td>{currency}</td>
      </tr>
    );
  });
  return (
      <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {component}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
    type: propTypes.string,
    amount: propTypes.number,
    currency: propTypes.string,
}
export default TransactionHistory;
