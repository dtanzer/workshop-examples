import React from 'react';

import MyInput from './MyInput';

export default (Component) => {
	return (props) => {
		var errorIndicator = null;
		if(props.value.length < props.minLength) {
			errorIndicator = <span>Too short</span>;
		}

		return (<div>
			<Component value={props.value} valueChanged={ props.valueChanged } />
			{errorIndicator}
		</div>);
	};
}

