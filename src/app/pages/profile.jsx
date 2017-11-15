import React from 'react';
import styles from './profile.scss';
import astyles from './allpages.scss';

export default class Profile extends React.Component {
    render() {
        console.log(styles.profile);
        return (
            <div className={styles.profile}>
                <div className={astyles.borderContainer}>
                    <div className={styles.left}>
                        <p> Left? </p>
                    </div>
                    <div className={styles.right}>
                        <p> Right </p>
                    </div>
                </div>
            </div>
        )
    }
}