import React from 'react';
import styles from './navbar.scss';

export default class NavBarItem extends React.Component {
    render() {
        var float = this.props.float;
        var style = {};
        if(float==="left"){
            style = {float:"left"};
        }
        else if(float==="right"){
            style = {float:"right"};
        }
        return (
            <li style={{float:this.props.float}}>
                <a href={this.props.link}>{this.props.name}</a>
            </li>
        )
    }
}