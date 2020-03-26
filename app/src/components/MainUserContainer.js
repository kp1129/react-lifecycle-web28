import React from "react";
import Usercard from "./Usercard";
import GitHubCalendar from 'react-github-calendar';

class MainUserContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello World!</h2>
        <Usercard data={this.props.data} />
        <GitHubCalendar username={this.props.data.login} />
      </div>
    );
  }
}

export default MainUserContainer;
