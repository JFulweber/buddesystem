import React from 'react';
import styles from './mainpage.scss';

export default class MainPage extends React.Component{
    render(){
        console.log(styles);
        return(
            <div className={styles.page}>
                <p> this is the mainpage </p>
            </div>
        )
    }
}