import React from 'react';
import Usercard from './Usercard';

class UserFollowersContainer extends React.Component {
    render(){
        return (
            <div>
                <h2>Followers</h2>
                <Usercard />
                <Usercard />
                <Usercard />
            </div>
        )
    }
}

export default UserFollowersContainer;