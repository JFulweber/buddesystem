import React from 'react';
import styles from '../used.scss';

export default class BigText extends React.Component{
    render(){
        return(
            <p className={styles.big}> {this.props.children} </p>
        )
    }
}