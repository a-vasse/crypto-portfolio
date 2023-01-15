import React, { Component } from 'react';
import Search from './Search';
import Calculate from './Calculate';
import axios from 'axios'

  class PortfolioContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleChange(event) {
    axios.post('http://localhost:3000/search', {
      search: event.target.value
    })

    .then( (data) => {
        this.setState({
          search_results: [...data.data.currencies]
        })
      })

    .catch ((data)=>{
      debugger
    })
  }

  handleSelect(event) {
    event.preventDefault()
    debugger
  }

  render() {
    return(
      <div>
        <Search searchResults={this.state.search_results} handleSelect={this.handleSelect} handleChange={this.handleChange} />
        <Calculate />
      </div>
    )
  }
}

export default PortfolioContainer;
