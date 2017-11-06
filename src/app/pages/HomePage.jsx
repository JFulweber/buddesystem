import React from 'react';
import styles from './homepage.scss';

export default class HomePage extends React.Component{
    render(){
        return(
            <div id = 'homepage' className = {styles.homepage}>
                <p className={styles.arial}> Welcome to the BuddE System </p>
                <p className={styles.sans}> Welcome to the BuddE System </p>
            </div>
        )
    }
}