import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.addTransaction}>
          <div className="inline fields">
            <input type="date" name="date" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
          <div>Select To Sort</div>
          <select name="cars" id="cars" onChange={this.props.sortBy}>
            <option value=""></option>
            <option value="Category">Category</option>
            <option value="Description">Description</option>
          </select>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
