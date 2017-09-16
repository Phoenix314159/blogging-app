import React, {Component} from 'react';
import '../styles/css/App.css';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from '../components/Header';
import yayImage from '../imgs/yay.png';

class App extends Component {

    constructor(props) {
        super(props);
        this.image = yayImage;

    }

    componentDidMount() {


    }

    render() {
        return (
            <div className="container centerHeader">
                <Header/>
                <img src={this.image} className="yayImage" alt="dude"/>
                <div className="flex">
                    <div className="main">
                    <h2>Welcome to React</h2>
                    <p>
                        This is from the redux store: {this.props.dude}
                    </p>
                </div>
            </div>
            </div>
        );
    }
}

export default App;

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchData: url => dispatch(actions.dummyActionCreator1(url)),
//         fetchString: string => dispatch(actions.dummyActionCreator2(string))
//     };
// };
//
// const mapStateToProps = ({something, dude}) => {
//     return {something, dude}
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)


