import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const portfolioItems = this.props.portfolio.map( (item, index) => <PortfolioItem key={index} item={item} /> )
    const total = this.props.portfolio.reduce( (total, curr) => total + curr.value, 0)

    return (
      <div>
        <div className="portfolio-value">
          <h3 className="portfolio-header">Total Portfolio Value:</h3>
          <h3 className="portfolio-header">¥{total.toLocaleString()}</h3>
        </div>
        <div className="portfolio-items">
          {portfolioItems}
        </div>
      </div>
    );
  }
}

export default Portfolio;
