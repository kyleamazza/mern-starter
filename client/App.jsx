import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Home from './components/Home';
import MenuBar from './components/MenuBar';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuBar />
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
