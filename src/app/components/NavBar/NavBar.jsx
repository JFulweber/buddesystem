import React from 'react';
import NavBarItem from './NavBarItem.jsx';
import styles from './navbar.scss';
import { withCookies, Cookies } from 'react-cookie';

export default class NavBar extends React.Component{

    componentWillMount() {
        var payLoad = {
            method: "GET",
            credentials: 'same-origin',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify()
          }
        fetch('/',payLoad).then((response)=>{
            console.log(response.headers.entries());
        })
      }

    render(){
        return(
            <div className={styles.navbar}> 
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}