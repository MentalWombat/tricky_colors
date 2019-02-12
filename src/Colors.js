import React, { Component } from 'react';
import ColorItem from './ColorItem'
import './Colors.css';

class Colors extends Component {
	render() {
		return (
			<div className="colors">
				{(new Array(3)).fill(0).map((item, index) => <ColorItem key={index}/>)}
          	</div>
		)
	}
}

export default Colors;