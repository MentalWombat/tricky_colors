import React, { Component } from 'react';
import './ColorItem.css'

class ColorItem extends Component {
	render() {
		const items = ['red', 'green', 'blue'];
		const item = items[Math.floor(Math.random() * items.length)];
		const colors = ['red', 'green', 'blue'];
		const color = colors[Math.floor(Math.random() * colors.length)];
		return (
			<div className={color}>{item}</div>
		)
	}}

export default ColorItem;