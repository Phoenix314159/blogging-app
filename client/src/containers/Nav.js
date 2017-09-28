import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
                            <li></li>
                            <li><Link to="/posts/new">Create a Post</Link></li>
                        </ul>
                        <button type="button" className="btn btn-primary navbar-btn navbar-right">Sign in</button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;
