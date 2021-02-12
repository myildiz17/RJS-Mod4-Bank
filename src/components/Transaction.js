import React from "react";

const Transaction = (props) => {
  const { amount, category, date, description, id} = props.account
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={()=>props.handleDelete(id)}>X</button></td>
    </tr>
  );
};

export default Transaction;
