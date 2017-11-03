import React from 'react';
import styles from './homepage.scss';

export default class HomePage extends React.Component{
    render(){
        console.log(styles);
        return(
            <div id = 'homepage' className = {styles.homepage}>
                <p> Welcome to the BuddE System </p>
            </div>
        )
    }
}