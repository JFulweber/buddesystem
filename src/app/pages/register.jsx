import React from 'react';
import rstyles from './register.scss';
import sstyles from './allpages.scss';

export default class Register extends React.Component {
    render() {
        return (
            <div id="register" className={rstyles.register}>
                <div className={sstyles.borderContainer}>
                    <form>
                        <p> First Name </p>
                        <input placeholder="John" type="text" />
                        <p> Last Name </p>
                        <input placeholder="Smith" type="text" />
                        <p> E-mail Address </p>
                        <input placeholder="johnsmith@buddy.com" type="email" />
                        <p> Date of Birth </p>
                        <p> Input as MM/DD/YYYY</p>
                        <input placeholder="MM/DD/YYYY" type="text"/>
                        <p></p>
                        <input type="submit" value="Register!" placeholder="Register!"/>
                    </form>
                </div>
            </div>
        )
    }
}