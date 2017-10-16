import React from 'react';
import styles from './navbar.scss';

export default class NavBarItem extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.link}>{this.props.name}</a>
            </li>
        )
    }
}