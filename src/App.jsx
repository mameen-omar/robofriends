import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';
import './App.css';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            searchQuery: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    render() {
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        });

        return (
            <div className={'tc'}>
                <h1 className='f1'> Robots </h1>
                <SearchBox onChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
};

export default App;