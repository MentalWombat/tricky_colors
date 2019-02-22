import React from 'react';
import './Item.css';

const Item = props => {
  return (
    // <div className={this.state.color}>{this.state.item}</div>
    <div className={props.color}>red</div>
	)
};

export default Item;