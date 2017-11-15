import React from 'react';
import styles from './homepage.scss';
import standardstyles from './allpages.scss';
import Banner from '../components/Banner/Banner.jsx'

export default class HomePage extends React.Component {
    render() {
        return (
            <div id='homepage' className={styles.homepage}>
                <Banner> Welcome to the BuddE System! </Banner>
                <div className={standardstyles.borderContainer}>
                    <p className={standardstyles.big}> What is the BuddE System?</p>
                    <p className={standardstyles.descriptor}>
                        The BuddE System is a psuedo-dating service that is meant to matchmake friends, not partners.
                        It is catered to those who have trouble socially be it due to anxiety, or any other social inhibitors.
                        Although, that does not mean you are not welcome if you don't have any trouble socially!
                    </p>
                    <div className={standardstyles.divider}></div>
                    <p className={standardstyles.big}>Why?</p>
                    <p className={standardstyles.descriptor}>
                        I am working on this as a school project and as a way to familiarize myself with the React and NodeJS
                        ecosystems.
                    </p>
                </div>
            </div>
        )
    }
}