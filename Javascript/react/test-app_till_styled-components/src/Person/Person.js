import React from 'react';
import styled from 'styled-components';

//use mostly function based component

const PersonStyledDiv = styled.div`
	border: 1px solid #eee;
	padding: 4px;
	border-radius: 5px;
	margin: 16px;
	box-shadow: 0 2px 3px #eee;
	@media (min-width: 500px) : {
		width: 500px;
	}
`;

const ClearFix = styled.div`clear: both;`;

const DeletePersonBtn = styled.button`
	float: right;
	background-color: white;
	&:hover {
		background-color: red;
		color: white;
	}
`;

const person = (props) => {
	const isActivePersonChange = (event) => {
		props.activePersonsChangeHandler(props.name, event);
	};

	const deletePerson = () => {
		props.deletePersonHandler(props.p_index);
	};

	return (
		<PersonStyledDiv>
			<p>
				{props.name} - {Math.floor(Math.random() * 30)} years old - {props.children}
			</p>
			<label>
				<input type="checkbox" onChange={isActivePersonChange} /> is Active
			</label>
			<DeletePersonBtn onClick={deletePerson}>Delete Person</DeletePersonBtn>
			<ClearFix />
		</PersonStyledDiv>
	);
};

export default person;
