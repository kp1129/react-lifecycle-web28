import React from 'react';
import MainUserContainer from './components/MainUserContainer';
import UserFollowersContainer from './components/UserFollowersContainer';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* search form that allows user to look up github handles */}
     {/* main usercard - displays the info from the github handle that was submitted */}
     <MainUserContainer />
     {/* list container that shows usercards of all the followers of the user above */}
     <UserFollowersContainer />
    </div>
  );
}

export default App;
