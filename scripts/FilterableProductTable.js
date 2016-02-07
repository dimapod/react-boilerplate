import React, {Component} from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  handleUserInput = (filterText, inStockOnly) => {
    this.setState({filterText, inStockOnly});
  };

  render() {
    return (
      <div>
        <SearchBar handleUserInput={this.handleUserInput} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
        <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}
