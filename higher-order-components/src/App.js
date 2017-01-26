import React from 'react';
import withNameValid from './withNameValid';
import './App.css';
import MyInput from './MyInput';
import withRange from './withRange';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			minLength: 0
		};

		this.NameInput = withNameValid(MyInput);
		this.RangedInput = withRange(MyInput, 4, 10);
	}

	render() {		
		return (
			<div className="App">
				<this.NameInput value={this.state.name} valueChanged={ v => this.setState({ name: v }) } minLength={this.state.minLength} />
				<br/>
				<this.RangedInput value={this.state.minLength} valueChanged={ this._updateMinLength.bind(this) } />
			</div>
		);
	}

	_updateMinLength(minLength) {
		this.setState({ minLength: minLength });
	}
}
