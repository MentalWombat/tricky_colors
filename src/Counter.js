import React from 'react';
import './Counter.css';

const Counter = props => {
	return (
		<div className="counter">Round: {props.counter}</div>
	)
}


export default Counter;
