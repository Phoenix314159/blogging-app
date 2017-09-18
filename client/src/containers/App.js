import React, {Component} from 'react';
import '../styles/css/App.css';
import {BrowserRouter, Route} from 'react-router-dom';
class Hello extends Component {
    render() {
        return <div>Hello!</div>
    }
}

class Goodbye extends Component {
    render() {
        return <div>Goodbye!</div>
    }
}
class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/hello" component={Hello}/>
                    <Route path="/goodbye" component={Goodbye}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;



