import React from 'react';
import axios from 'axios';
import MainUserContainer from './components/MainUserContainer';
import FollowersContainer from './components/FollowersContainer';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      mainUser: {}
    } // close state
  } // close constructor

  componentDidMount(){
    axios.get("https://api.github.com/users/kp1129")
      .then(res => this.setState({mainUser: res.data}))
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
       {/* search form that allows user to look up github handles */}
       {/* main usercard - displays the info from the github handle that was submitted */}
       <MainUserContainer data={this.state.mainUser}/>
       {/* list container that shows usercards of all the followers of the user above */}
       <FollowersContainer />
      </div>
    );
  }
}

export default App;
