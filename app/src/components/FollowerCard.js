import React from "react";
import Card from '@material-ui/core/Card';

class FollowerCard extends React.Component {
  render() {
    return (
      <Card className="follower-card">
        <img className="follower-card-img" src={this.props.data.avatar_url} alt={this.props.data.login} />
        <h3>Username: {this.props.data.login}</h3>
        <p>URL: {this.props.data.html_url}</p>
      </Card>
    );
  }
}

export default FollowerCard;
