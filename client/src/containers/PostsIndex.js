import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts, removeWelcome, pleaseLogin } from '../actions'

class PostsIndex extends Component {

  componentDidMount () {
    const {fetchPosts, removeWelcome, pleaseLogin} = this.props
    fetchPosts(`/api/getposts`)
    removeWelcome(false)
    pleaseLogin(false)
  }

  renderPosts () {
    const {posts, auth: {loggedIn, currentUser}} = this.props
    if (loggedIn && currentUser) {
      return (
        _.map(posts, post => {
          const {title, id} = post
          if (title !== null) {
            return (
              <li className="list-group-item" key={id}>
                <Link to={`/posts/${id}`}>
                  {title}
                </Link>
              </li>
            )
          }
        })
      )
    }
    return (
      <div>
        <h1 className="animated slideInUp textWhite">Welcome to Blogger</h1>
      </div>
    )

  }

  render () {
    const {auth: {loggedIn, userAlert}} = this.props
    return (
      <div className={'animated fadeIn container postsBorder ' + (!userAlert ? 'show' : 'hidden')}>
        <h3 className={'text-center ' + (loggedIn ? 'show' : 'hidden')}>Posts</h3>
        <ul className="list-group totalPosts">
          {this.renderPosts()}
        </ul>
        <div className={'text-center ' + (loggedIn ? 'show' : 'hidden')}>
          <Link className="btn btn-primary" to="/posts/new">
            Add a post
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({posts, auth}) => {
  return {posts, auth}
}
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: url => dispatch(fetchPosts(url)),
    removeWelcome: boolean => dispatch(removeWelcome(boolean)),
    pleaseLogin: boolean => dispatch(pleaseLogin(boolean))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)