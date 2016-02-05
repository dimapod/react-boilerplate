import React, {Component} from 'react';

export default class Item extends Component {
  render() {
    return (
      <h3>{this.props.item.greeting} {this.props.item.name} !</h3>
    );
  }
}
