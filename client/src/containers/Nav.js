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
                        <ul className="nav navbar-nav">
                            <li className={(this.props.auth.loggedIn && this.props.auth.currentUser ? 'hidden' : 'show')}>
                                <Link to="/adduser">Create an Account</Link></li>
                        </ul>
                        <LogButton/>
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
