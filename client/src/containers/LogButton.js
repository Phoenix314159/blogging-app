import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../actions';

class LogButton extends Component {
    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        console.log(this.props);
        this.props.logout();
    }

    render() {
        if (this.props.auth.loggedIn) {
            return (
                <Link to="/">
                    <button type="button" onClick={this.onLogout}
                            className="btn btn-primary navbar-btn navbar-right">Log Out
                    </button>
                </Link>
            )
        }
        return (
            <Link to="/login">
                <button type="button"
                        className="btn btn-primary navbar-btn navbar-right">Log in
                </button>
            </Link>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return ({auth})
}

export default connect(mapStateToProps, {logout})(LogButton)