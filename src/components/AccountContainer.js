import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      accounts: [],
      input: "",
      sortBy:""
    };
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((res) => res.json())
      .then((accounts) => {
        this.setState({
          accounts,
        });
      });
  }
  addTransaction = (event) => {
    event.preventDefault();
    const date = event.target[0].value;
    const description = event.target[1].value;
    const category = event.target[2].value;
    const amount = event.target[3].value;
    event.target.reset();

    const data = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };

    fetch("http://localhost:6001/transactions", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedAccounts = [...this.state.accounts, data];
        this.setState({
          accounts: updatedAccounts,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  handleSearch = (event) => {
    const searchInput = event.target.value;

    this.setState({
      input: searchInput,
    });
  };

  handleView=()=>{
    let updatedAccounts = this.state.accounts
    if(this.state.input){
      updatedAccounts= this.state.accounts.filter(acc => acc.description.includes(this.state.input))
    }

    if(this.state.sortBy === "Category"){
      updatedAccounts = this.state.accounts.sort((a,b)=>(a.category > b.category) ? 1 : -1)
    }
    if(this.state.sortBy === "Description"){
      updatedAccounts = this.state.accounts.sort((a,b)=>(a.description > b.description) ? 1 : -1)
    }
    // debugger

    return updatedAccounts
  }

  sortBy=(event)=>{
    const sortValue = event.target.value
    this.setState({
      sortBy: sortValue
    })
  }

  handleDelete=(id)=>{
    fetch("http://localhost:6001/transactions" + id, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => {
  const updatedAccounts = this.state.accounts.filter(acc=> acc.id !== id)
        this.setState({
          accounts: updatedAccounts,
        });
})
  }

  render() {
    const accountsToView = this.handleView()
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm addTransaction={this.addTransaction} sortBy={this.sortBy} />
        <TransactionsList accounts={accountsToView} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
