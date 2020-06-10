import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import styles from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Test from '../components/Test/Test';

class App extends Component {
	// Special property if we change anything in the state then it automatically re-renders the dom
	// use less stateful component and more stateless component

	constructor(props) {
		super(props);
		this.state = {
			company: 'Abc',
			dummy: 'Hello World!!',
			dummyShow: true,
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
		console.log('Inside [App] Constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Inside [App] getDerivedStateFromProps ', props);
		return state;
	}

	shouldComponentUpdate(nexProps, nextState) {
		console.log('Inside [App] shouldComponetUpdate');
		return true;
	}

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

		// Also deleting from the active Persons array

		let activePersons = [ ...this.state.activePersons ];
		let activeIndex = activePersons.indexOf(this.state.persons[index]);
		activePersons.splice(activeIndex, 1);
		this.setState({
			activePersons: activePersons
		});
	};

	dummyChangeHandler = (value) => {
		console.log(' [App] state change');
		this.setState({
			dummy: value
		});
	};

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Inside [App] getSnapshotBeforeUpdate');
		return null;
	}

	render() {
		console.log('Inside [App] render');
		return (
			<div className={styles.App}>
				<h1>{this.props.appTitle}</h1>
				<Cockpit
					company={this.state.company}
					showPersons={this.state.showPersons}
					changeCompanyHandler={this.changeCompanyName}
					showPersonHandler={this.showPersonsHandler}
					printStateHandler={this.printState}
				/>

				<Persons
					deletePersonHandler={this.deletePersonHandler}
					activePersonsChangeHandler={this.activePersonsChangeHandler}
					data={this.state}
				/>

				<Test
					show={this.state.dummyShow}
					data={this.state.dummy}
					dummyChangeHandler={this.dummyChangeHandler}
					onclickH={() => {
						this.setState({
							dummyShow: !this.state.dummyShow
						});
					}}
				/>
			</div>

			// Another way to create jsx
			// React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'First react app'))
		);
	}

	// componentWillMount() is Lifecycle hook that can be used  -- but may be depricated in future

	componentDidMount() {
		console.log('Inside [App] ComponentDidMount');
	}

	componentDidUpdate() {
		console.log('Inside [App] componentDidUpdate');
	}
}

export default App;
