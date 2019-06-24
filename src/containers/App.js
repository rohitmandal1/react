import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from'../components/SearchBox';
import Scroll from '../components/Scroll';
import  './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
		robots: [],
	     searchfield: ''	
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> {this.setState({robots: users})}); 
	}

	onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
		
	}
	render() {
		const {robots,searchfield} = this.state;
		const filterdRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if(!robots.length) {
			return <h1>Loading</h1>
		}
		else{ 

			return (
		<div className='tc'>
		<h1 className='f1'>RoboFriend</h1>
		<SearchBox searchChange={this.onSearchChange} />
		<Scroll>
        <Cardlist robots={filterdRobots} />
        </Scroll>
        </div>
  );
}		
 }

}

export default App;