import React from 'react';
import MasterLayout from './layouts/MasterLayout/MasterLayout.jsx';
import HomePage from './pages/HomePage.jsx';

export default class App extends React.Component {
    render() {
        return (
            <MasterLayout>
                <HomePage/>
            </MasterLayout>
        )
    }
}