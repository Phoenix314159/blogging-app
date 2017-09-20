import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../styles/css/App.css';
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostsIndex from '../containers/PostsIndex';
import PostsNew from '../containers/PostsNew';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/posts/new" component={PostsNew}/>
                        <Route path="/" component={PostsIndex}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;



