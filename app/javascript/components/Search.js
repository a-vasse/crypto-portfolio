import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const searchResults = this.props.searchResults.map( currency =>
      <li key={currency.id} data-id={currency.id} onClick={this.props.handleSelect} className="currency-list-item">
        <a href="#" className='currency'>
          <span>{currency.name}</span><span className="currency_symbol">{currency.currency_symbol}</span>
        </a>
      </li>)

    return (
    <div>
      <form>
        <h3 className="title">Currency Selection</h3>
        <div className="form-group">
          <label>Search for a Currency:</label><br/>
          <input onChange={this.props.handleChange} autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Litecoin, Ethereum..." value={this.props.name} className="field"/>
        </div>
        <div className="currency-list">
          {searchResults}
        </div>
      </form>
    </div>
    );
  }
}

export default Search;
