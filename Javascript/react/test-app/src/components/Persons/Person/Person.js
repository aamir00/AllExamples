import React from 'react';
import styled from 'styled-components';
import styles from './Person.css';

//use mostly function based component

const ClearFix = styled.div`clear: both;`;

const person = (props) => {
	const isActivePersonChange = (event) => {
		props.activePersonsChangeHandler(props.name, event);
	};

	const deletePerson = () => {
		props.deletePersonHandler(props.p_index);
	};

	let delteBtnStyles = {
		float: 'right'
	};

	console.log('Inside [Person] render');

	return (
		<div className={styles.Person}>
			<p>
				{props.name} - {Math.floor(Math.random() * 30)} years old - {props.children}
			</p>
			<label>
				<input type="checkbox" onChange={isActivePersonChange} /> is Active
			</label>
			<button id="deletePerson" style={delteBtnStyles} onClick={deletePerson}>
				Delete Person
			</button>
			<ClearFix />
		</div>
	);
};

export default person;
