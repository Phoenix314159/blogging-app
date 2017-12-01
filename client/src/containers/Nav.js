import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LogButton from './LogButton';

class Nav extends Component {

    render() {
        const {auth: {loggedIn, currentUser}} = this.props
        return (
            <div className="animated flipInX navBar">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/">
                                <button className="navbar-btn btn btn-primary">
                                    Home
                                </button>
                            </Link>
                        </div>
                        <div className="centerButtons2">
                            <div
                                className={"btn btn-success navbar-btn navbar-right " + (loggedIn && currentUser ? 'hidden' : 'show')}>
                                <Link to="/adduser">
                                    <span className="textWhite">Create an Account</span>
                                </Link>
                            </div>
                            <LogButton/>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = ({auth}) => {
    return {auth}
}
export default connect(mapStateToProps, null)(Nav);
