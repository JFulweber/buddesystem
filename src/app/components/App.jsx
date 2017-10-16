import React from 'react';
import MasterLayout from '../layouts/MasterLayout/MasterLayout.jsx';

export default class App extends React.Component {
    render() {
        return (
            <MasterLayout>
                <p> Hi I'm the react client </p>
            </MasterLayout>
        )
    }
}