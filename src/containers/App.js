import React, {Component} from 'react';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});

		return (
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox onChange = {this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
}

export default App;