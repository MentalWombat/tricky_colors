import React, { Component } from 'react';
import Navbar from './Navbar';
import Item from './Item';
import './App.css';

const NUM_ITEMS = 3;

class App extends Component {
	constructor(props) {
		super(props);
    const colors = Array(NUM_ITEMS).fill().map(this.getRandomColor, this);
		this.state = {counter: 1, color: colors};

		setInterval(() => {
			this.setState((prevState, props) => {
				return {
					counter: prevState.counter + 1
				};
			});
      const colors = this.state.color.slice();
      const newColors = colors.map(this.getRandomColor, this);
      this.setState({color: newColors});
		}, 3000);
	}

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.colors.length);
    return this.props.colors[colorIndex];
  }

	render() {
    const colors = this.state.color.map((color, index) => (
      <Item key={index} color={color} />
    ));
  	return (
    	<div className="App">
      	<Navbar counter={this.state.counter}/>
      	<div className="colors">
         {colors} 
        </div>
    	</div>
  	);
	}
}

App.defaultProps = {
  colors: ['red', 'green', 'blue'],
}

export default App;