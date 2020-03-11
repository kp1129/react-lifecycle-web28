import React from 'react';

class Usercard extends React.Component {
    render(){
        return (
            <div>
                <img src={this.props.data.avatar_url} alt={this.props.data.login} />
                <h3>Username: {this.props.data.login}</h3>
        <p>Name: {this.props.data.name}</p>
        <p>Following: {this.props.data.following}</p>
        <p>Followers: {this.props.data.followers}</p>
        <p># of public repos: {this.props.data.public_repos}</p>
        <p>URL: {this.props.data.html_url}</p>
            </div>
        )
    }
}

export default Usercard;