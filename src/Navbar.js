import React from 'react';
import Counter from './Counter';
import './Navbar.css';

const Navbar = props => (
	<>
		{/* <button>go</button> */}
		<Counter counter={props.counter} />
	</>
)

export default Navbar;
