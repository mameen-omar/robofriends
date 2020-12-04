import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            robots: []
        };
    }

    onSearchChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        }).then((robots) => {
            this.setState({
                robots: robots
            });
        })
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        });

        return (
            <div className={'tc'}>
                <h1 className='f1'> Robots </h1>
                <SearchBox onChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
};

export default App;