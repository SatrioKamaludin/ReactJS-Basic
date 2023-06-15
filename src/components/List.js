import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {
    render(){
        return(
            <div>
                <h2>List Component</h2>
                <ListItem/>
            </div>
        )
    }
}

export default List;