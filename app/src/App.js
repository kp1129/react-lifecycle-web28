import React from "react";
import axios from "axios";
import MainUserContainer from "./components/MainUserContainer";
import FollowersContainer from "./components/FollowersContainer";
import Search from "./components/Search";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainUser: {},
      searchUsername: ""
    }; // close state
  } // close constructor

  searchUser = username => {
    this.setState({ searchUsername: username });
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/kp1129")
      .then(res => this.setState({ mainUser: res.data }))
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchUsername !== this.state.searchUsername){
      axios
      .get(`https://api.github.com/users/${this.state.searchUsername}`)
      .then(res => this.setState({ mainUser: res.data }))
      .catch(err => console.log(err));
    }
  }

   render() {
    return (
      <div className="App">
        <Search searchUser={this.searchUser} />
        <MainUserContainer data={this.state.mainUser} />        
        <FollowersContainer user={this.state.searchUsername} />
      </div>
    );
  }
}

export default App;
