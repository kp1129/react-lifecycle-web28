import React from 'react';

class Search extends React.Component {
    constructor(){
        super();
        this.state = {
            searchQuery: ""
        } //close state
    } // close constructor

    handleChange = (e) => {
        this.setState({searchQuery: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit fired')
        this.props.searchUser(this.state.searchQuery);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">
                {console.log(this.state.searchQuery)}
            <input onChange={this.handleChange} id="search" name="search" type="text" value={this.state.searchQuery} placeholder="search github users"/>
            </label>
            </form>
        )
    }
}

export default Search;