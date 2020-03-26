import React from "react";
import Card from '@material-ui/core/Card';

class FollowerCard extends React.Component {
  render() {
    return (
      <Card className="follower-card">
        <img className="follower-card-img" src={this.props.data.avatar_url} alt={this.props.data.login} />
        <p>Username: <br/> {this.props.data.login}</p>
      </Card>
    );
  }
}

export default FollowerCard;
