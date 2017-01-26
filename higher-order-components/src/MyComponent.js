import React from 'react';

const MyComponent = (props) => {
  return (
    <input type="text" value={props.value} onChange={ (e) => props.valueChanged(e.target.value) } />
  );
}

function withNameValid(Component) {
	return (props) => {
		var errorIndicator = null;
		if(props.value.length < 7) {
			errorIndicator = <span>Too short</span>;
		}

		return (<div>
			<Component value={props.value} valueChanged={ props.valueChanged } />
			{errorIndicator}
		</div>);
	};
}

export default withNameValid(MyComponent);