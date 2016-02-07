import React, {Component} from 'react';

export default class SearchBar extends Component {
  handleChange = () => {
    this.props.handleUserInput(this.refs.filterTextInput.value, this.refs.inStockOnlyInput.checked);
  };

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..."
               ref="filterTextInput"
               onChange={this.handleChange}/>
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}