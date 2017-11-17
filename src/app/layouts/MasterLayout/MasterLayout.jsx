import React from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import NavBarItem from '../../components/NavBar/NavBarItem.jsx';
import styles from './layout.scss';
import navstyles from '../../components/NavBar/navbar.scss';

export default class MasterLayout extends React.Component {

    constructor(props) {
        super(props)

        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);

        // Set some state
        this.state = {
            messageShown: false
        };
    }

    // This method will be sent to the child component
    handler() {
        console.log("running?");
        this.setState({
            backgroundChanged: true
        });
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => {
                React.cloneElement(child, {
                    action: this.handler
                });
                console.log(child);
            }
        );
        var style = styles.body;
        if (this.state.backgroundChanged) {
            style = styles.body2;
        }
        return (
            <div id="whole">
                <title> {this.props.title} </title>
                <div id="header" className={styles.header}>
                    <NavBar>
                        <NavBarItem name="Home" link="/" />
                        <NavBarItem name="Register" link="register" float="right" />
                        <NavBarItem name="Login" link="login" />
                    </NavBar>
                </div>
                <div id="body" className={styles.body}>
                    <div style={{ height: "50px" }}></div>
                        {this.props.children}
                </div>
            </div>
        )
    }
}