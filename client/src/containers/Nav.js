import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LogButton from './LogButton';

class Nav extends Component {

    render() {
        return (
            <div className="navBar">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">Blogger</Link>
                        </div>
                        <div className="centerButtons2">
                            <div
                                className={"btn btn-success navbar-btn navbar-right " + (this.props.auth.loggedIn && this.props.auth.currentUser ? 'hidden' : 'show')}>
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
