import React from "react";
import Card from "@material-ui/core/Card";

class Usercard extends React.Component {
  render() {
    return (
      <Card className="main-user">
        <img src={this.props.data.avatar_url} alt={this.props.data.login} />
        <h3>Username: {this.props.data.login}</h3>
        <p>Name: {this.props.data.name}</p>
        <p>Following: {this.props.data.following}</p>
        <p>Followers: {this.props.data.followers}</p>
        <p># of public repos: {this.props.data.public_repos}</p>
      </Card>
    );
  }
}

export default Usercard;
