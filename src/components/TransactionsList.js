import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {props.accounts.map((acc) => (
          <Transaction account={acc} key={acc.id} handleDelete={props.handleDelete}/>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsList;
