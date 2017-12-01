import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost, removeWelcome } from '../actions'
import { Link } from 'react-router-dom'

class PostsShow extends Component {

  componentDidMount () {
    const {post, fetchPost, match: {params: {id}}} = this.props
    if (!post) {
      fetchPost(id)
    }
  }

  componentWillMount () {
    const {removeWelcome} = this.props
    removeWelcome(true)
  }

  onDeleteClick = () => {
    const {match: {params: {id}}, deletePost, history} = this.props
    deletePost(id, () => {
      history.push('/')
    })
  }

  render () {
    const {post: {title, categories, content}} = this.props
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div className="animated flipInY formWidth">
        <div className="singlePost">
          <h2>Title</h2>
          <hr className="one"/>
          <h3>{title}</h3>
          <hr className="two"/>
          <h2>Categories</h2>
          <hr className="one"/>
          <h3>{categories}</h3>
          <hr className="two"/>
          <h2>Content</h2>
          <hr className="one"/>
          <p>{content}</p>
          <hr className="two"/>
          <div className="centerButtons">
            <Link to="/" className="btn btn-primary">Back To List of Posts</Link>
            <button
              className="btn btn-danger pull-xs-right"
              onClick={this.onDeleteClick}
            >Delete Post
            </button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({posts}, ownProps) => {
  const {match: {params: {id}}} = ownProps
  return {post: posts[id]}
}
export default connect(mapStateToProps, {fetchPost, deletePost, removeWelcome})(PostsShow)
