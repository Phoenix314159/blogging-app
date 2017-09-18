import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../styles/css/App.css';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PostsIndex from '../containers/PostsIndex';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={PostsIndex}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;



