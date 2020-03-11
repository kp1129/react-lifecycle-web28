import React from 'react';
import axios from 'axios';
import FollowerCard from './FollowerCard';

class FollowersContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            followers: []
        } // close state
    } // close constructor

    componentDidMount(){
        axios.get("https://api.github.com/users/kp1129/followers")
            .then(res => this.setState({followers: res.data}))
            .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                <h2>Followers</h2>
               {this.state.followers.map(user => <FollowerCard data={user} />)}
            </div>
        )
    }
}

export default FollowersContainer;