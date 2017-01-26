import React from 'react';
import MyComponent from './MyComponent';
import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
	}

	render() {
		return (
			<div className="App">
				<MyComponent value={this.state.name} valueChanged={ v => this.setState({ name: v }) } />
			</div>
		);
	}
}
