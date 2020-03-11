import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        this.setState({searchQuery: ""});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <TextField variant="filled" onChange={this.handleChange} id="search" name="search" type="text" value={this.state.searchQuery} label="search github users"/>
            <Button variant="contained" color="primary" type="submit">Search</Button>
            </form>
        )
    }
}

export default Search;