import React from 'react';
import styles from '../used.scss';

export default class DescriptorText extends React.Component{
    render(){
        return(
            <p className={styles.descriptor}> {this.props.children} </p> 
        )
    }
}