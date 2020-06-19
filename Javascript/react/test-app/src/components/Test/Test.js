import React, { PureComponent } from 'react';

class Test extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
		console.log('Inside [Test] Constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Inside [Test] getDerivedStateFromProps', props.data);
		return state;
	}

	// ShouldComponentUpdate cannot be used with the PureComponent

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('Inside [Test] shouldComponetUpdate');
	// 	/**
	// 	 * Checks for updating the component, PureComponent is better approach
	// 	 */

	// 	// if (nextProps.data !== this.props.data || nextProps.show !== this.props.show) {
	// 	// 	return true;
	// 	// } else {
	// 	// 	return false;
	// 	// }
	// }

	//getsnapshotbeforeupdate of all the components gets executed first, and after that componentDidUpdate() gets executed
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Inside [Test] getSnapshotBeforeUpdate');
		return null;
	}

	render() {
		var inputText = null;
		if (this.props.show) {
			inputText = (
				<div>
					<label> Dummy Value: </label>
					<input
						value={this.props.data}
						type="text"
						onChange={($event) => this.props.dummyChangeHandler($event.target.value)}
					/>
				</div>
			);
		}

		console.log('Inside [Test] Render');
		return (
			<div>
				<button onClick={this.props.onclickH}>{this.props.show ? 'hide' : 'show'} </button>
				{inputText}
			</div>
		);
	}

	componentDidMount() {
		console.log('Inside [Test] componentDidMount ');
	}

	componentDidUpdate() {
		console.log('Inside [Test] componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('Inside [Test] componentWillUnmount');
	}
}

export default Test;
