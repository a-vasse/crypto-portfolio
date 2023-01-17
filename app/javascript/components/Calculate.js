import React, { Component } from 'react';

class Calculate extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3 className="title">How much {this.props.active_currency.name} do you own?</h3>
        <label>Enter amount owned:</label><br/>
        <form onSubmit={this.props.handleSubmit}>
            <input onChange={this.props.handleAmount} autoComplete="off" type="text" name="amount" placeholder='Ex. "6"' value={this.props.amount} className="calculate"/>
            <input type="submit" className="calculate-button" value="Calculate Total" />
        </form>
      </div>
    );
  }
}

export default Calculate;
