import React from 'react';
import NavBarItem from './NavBarItem.jsx';
import styles from './navbar.scss';

export default class NavBar extends React.Component{
    render(){
        return(
            <div className={styles.navbar}> 
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}