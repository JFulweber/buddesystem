import React from 'react';
import styles from './homepage.scss';
import Banner from '../components/Banner/Banner.jsx'

export default class HomePage extends React.Component {
    render() {
        console.log(styles.banner);
        return (
            <div id='homepage' className={styles.homepage}>
                <Banner> Welcome to the BuddE System! </Banner>
                <div className = {styles.borderContainer}>
                    <p> The BuddE System is a psuedo-dating website made to matchmake friends, not partners.</p>
                </div>
            </div>
        )
    }
}