import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {
    render(){
        return(
            <div>
                <h2>{this.props.children}</h2>
                <h3>{this.props.name}</h3>
                <h4>{this.props.myBook}</h4>
                <p>{this.props.test}</p>
            </div>
        )
    }
}

export default List;