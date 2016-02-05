import React, {Component} from 'react';
import Item from './Item';

export default class ItemList extends Component {
  render() {
    var items = this.props.items.map((item) => {
      return <Item item={item} key={item.id}></Item>
    });

    return (<div>
      {items}
    </div>);
  }
}
