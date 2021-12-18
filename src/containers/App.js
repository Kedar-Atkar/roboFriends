import React from 'react';
import CardList from '../components/cardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../containers/App.css';


class App extends React.Component{
	constructor(){
		super();
		this.state={
			robots : [],
			searchField : ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>{this.setState({robots:users})})
  }

	onSearchChange = (event)=>{
		this.setState({searchField: event.target.value});
		// console.log(filteredRobots);
	}

	render(){
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(robot=>{
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});
	return !robots.length ?
			 <h1>Loading</h1> :
		(
		<div className='tc'>
		<h1 className='f2'>RoboFriends</h1>
		<SearchBox searchField = {searchField} searchChange = {this.onSearchChange} />
		<Scroll>
			<ErrorBoundry>
				<CardList robots = {filteredRobots}/>
			</ErrorBoundry>
		</Scroll>	
		</div>
	)
	}
}

export default App;