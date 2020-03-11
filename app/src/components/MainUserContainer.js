import React from 'react';
import Usercard from './Usercard';

class MainUserContainer extends React.Component {
    render(){
        return (
            <div>
                <h2>Hello World!</h2>       
                <Usercard data={this.props.data} />
            </div>
        )
    }
}

export default MainUserContainer;