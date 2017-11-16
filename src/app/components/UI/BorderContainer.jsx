import React from 'react';
import styles from '../used.scss';

export default class BorderContainer extends React.Component{
    render(){
        return(
            <div className={styles.borderContainer}>
                {this.props.children}
            </div>
        )
    }
}