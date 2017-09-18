import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../styles/css/App.css';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PostsIndex from '../containers/PostsIndex';
import PostsNew from '../containers/PostsNew';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={PostsIndex}/>
                    <Route path="/posts/new" component={PostsNew}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;



