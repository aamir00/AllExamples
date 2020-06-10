import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const ShowButton = styled.button`
	color: white;
	background-color: ${(props) => (props.show ? 'red' : '#567956')};
	padding: 2px 6px;
	border: 1px solid black;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => (props.show ? 'maroon' : 'lightgreen')};
	}
`;

class App extends Component {
	// Special property if we change anything in the state then it automatically re-renders the dom
	// use less stateful component and more stateless component
	state = {
		company: 'Abc',
		activePersons: [],
		showPersons: true,
		persons: [
			{
				id: 1,
				name: 'Rashid',
				place: 'Hyderabad'
			},
			{
				id: 2,
				name: 'Khalid',
				place: 'Delhi'
			}
		]
	};

	changeCompanyName = () => {
		// THIS WILL NOT WORK: this.state.company = 'Google';
		console.log('changeCompany button clicked');
		let company = this.state.company === 'Abc' ? 'Google' : 'Abc';

		// merges the changes to the state
		this.setState({
			company: company
		});
		// logs Abc
		//console.log(this.state.company);
	};

	activePersonsChangeHandler = (name, event) => {
		let index = -1;
		let arr = [ ...this.state.activePersons ];
		if ((index = arr.indexOf(name)) > -1) {
			arr.splice(index, 1);
		} else {
			arr.push(name);
		}

		// State is changed. The person component will re-render
		this.setState({
			activePersons: arr
		});
	};

	printState = () => {
		console.log('state', this.state);
	};

	showPersonsHandler = () => {
		this.setState({
			showPersons: !this.state.showPersons
		});
	};

	deletePersonHandler = (index) => {
		console.log('Inside deletePersonHandler', index);
		const persons = [ ...this.state.persons ];
		persons.splice(index, 1);
		this.setState({
			persons: persons
		});
	};

	render() {
		let persons = null;

		// better way to show persons based on showpersons
		// we can also return array of jsx
		if (this.state.showPersons) {
			persons = (
				<ul>
					{this.state.persons.map((person, index) => {
						return (
							<li key={person.id}>
								<Person
									deletePersonHandler={this.deletePersonHandler}
									p_index={index}
									activePersonsChangeHandler={this.activePersonsChangeHandler}
									name={person.name}
								>
									{person.place}
								</Person>
							</li>
						);
					})}
				</ul>
			);
		}

		/*
		We are wrapping the complete div in StyleRoot because we are using @media queries
		*/
		return (
			<div className="App">
				<h1>First react app</h1>
				<h2> {this.state.company} :</h2>
				<button onClick={this.changeCompanyName}> switch company</button>
				<button onClick={this.printState}>Print State</button>
				<ShowButton show={this.state.showPersons} onClick={this.showPersonsHandler}>
					{this.state.showPersons ? 'Hide Persons' : 'Show Persons'}
				</ShowButton>
				{persons}

				{/* {this.state.showPersons ? (
					<ul>
						<li>
							<Person activePersonsChangeHandler={this.activePersonsChangeHandler} name="Rashid">
								Hobbies : "Running"
							</Person>
						</li>
						<li>
							<Person activePersonsChangeHandler={this.activePersonsChangeHandler} name="Khalid" />
						</li>s
					</ul>
				) : null} */}
			</div>

			// Another way to create jsx
			// React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'First react app'))
		);
	}
}

export default App;
