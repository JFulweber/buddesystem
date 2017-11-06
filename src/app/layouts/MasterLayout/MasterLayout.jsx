import React from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import NavBarItem from '../../components/NavBar/NavBarItem.jsx';
import styles from './layout.scss';
import navstyles from '../../components/NavBar/navbar.scss';

export default class MasterLayout extends React.Component {
    render() {
        return (
            <div id="whole" >
                <title> {this.props.title} </title>
                <div id="header" className={styles.header}>
                    <NavBar>
                        <NavBarItem name="item 1" link="#1"/>
                        <NavBarItem name="item 2" link="#2"/>
                        <NavBarItem name="Login" link="login"/>
                    </NavBar>
                </div>
                <div id="body" className={styles.body}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}