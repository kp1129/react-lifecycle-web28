import React from "react";

class FollowerCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.data.avatar_url} alt={this.props.data.login} />
        <h3>Username: {this.props.data.login}</h3>
        <p>URL: {this.props.data.html_url}</p>
      </div>
    );
  }
}

export default FollowerCard;
