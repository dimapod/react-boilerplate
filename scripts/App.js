import React, {Component} from 'react';
import ItemList from './ItemList';

export default class App extends Component {
  constructor() {
    super();
    this.name = 'AAA';
  }

  render() {
    var items = [{greeting: 'Hello', name: 'Paul', id: 1}, {greeting: 'By', name: 'Sam', id: 2}, {greeting: 'Hi', name: 'Sammy', id: 3}];
    return (
      <div>
        <h1>Hello {this.name} !</h1>
        <ItemList items={items}></ItemList>
      </div>
    );
  }
}
