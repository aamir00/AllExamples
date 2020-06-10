import React, { useEffect } from 'react';
import Person from './Person/Person';
import styles from './Persons.css';

const Persons = (props) => {
	let persons = null;

	console.log('Inside [Persons] render');

	// If the second argument is empty array then it will get executed only on load and not after that as there is no dependency hence no change

	/*
	
	- Second argument is dependency array, shell comparison ()
	- Can replace it with ComponentDidMount (by passing empty array in second argument)
	- ComponentUnmount can be acheived by passing empty array and returning cleanup function
	- Clean up function will get executed just before useEffect function  

	*/
	useEffect(
		() => {
			console.log('Inside [Persons] useEffect');
			// can send http request
			return () => {
				console.log('Inside [Persons] cleanup function');
			};
		},
		[ props.data.company ]
	);

	useEffect(() => {
		// Place your ComponentDidMount only logic here
		console.log('Inside [Persons] useEffect2');
		return () => {
			// Place you component UnMount only logic here
			console.log('Inside [Persons] cleanup2');
		};
	}, []);

	// For every render below functions will get executed

	useEffect(() => {
		console.log('Inside [Persons] useEffect3');
		return () => {
			// will get called for every change
			console.log('Inside [Persons] cleanup3');
		};
	});

	if (props.data.showPersons) {
		persons = (
			<div className={styles.Persons}>
				<ul>
					{props.data.persons.map((person, index) => {
						return (
							<li key={person.id}>
								<Person
									deletePersonHandler={props.deletePersonHandler}
									p_index={index}
									activePersonsChangeHandler={props.activePersonsChangeHandler}
									name={person.name}
								>
									{person.place}
								</Person>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	return persons;
};

export default Persons;
