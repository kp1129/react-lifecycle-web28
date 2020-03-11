import React from 'react';
import Usercard from './Usercard';

class MainUserContainer extends React.Component {
    render(){
        return (
            <div>
                <h2>Hello World!</h2>
                <h2>Meet Github User</h2>
                <Usercard />
            </div>
        )
    }
}

export default MainUserContainer;