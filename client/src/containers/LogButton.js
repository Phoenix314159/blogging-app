import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions'

class LogButton extends Component {

  onLogout = () => {
    this.props.logout()
  }

  render () {
    const {auth: {loggedIn}} = this.props
    if (loggedIn) {
      return (
        <Link to="/">
          <button type="button" onClick={this.onLogout}
                  className="btn btn-primary navbar-btn navbar-right">
            <span className="textWhite">Log Out</span>
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