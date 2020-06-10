import React from 'react';

const Cockpit = (props) => {
	let showBtnStyles = [];

	// better way to show persons based on showpersons
	// we can also return array of jsx

	if (!props.showPersons) {
		showBtnStyles = [ 'success' ];
	} else {
		showBtnStyles = [ 'danger' ];
	}

	console.log('Inside [Cockpit] render');

	const cockpit = (
		<div>
			<h2> {props.company}:</h2>
			<button onClick={props.changeCompanyHandler}> switch company</button>
			<button onClick={props.printStateHandler}>Print State</button>
			<button className={showBtnStyles.join(' ')} onClick={props.showPersonHandler}>
				{props.showPersons ? 'Hide Persons' : 'Show Persons'}
			</button>
		</div>
	);

	return cockpit;
};

export default React.memo(Cockpit);
