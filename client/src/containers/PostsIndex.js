import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions/index';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts('/api/getposts');
    }

    renderPosts() {
        return (
            _.map(this.props.posts, post => {
                if (post.title !== null) {
                    return (
                        <li className="list-group-item" key={post.id}>
                            <Link to={`/posts/${post.id}`}>
                                  {post.title}
                            </Link>
                        </li>
                    )
                }
            })
        )
    }

    render() {
        return (
            <div className="container postsBorder">
                <h3 className="text-center">Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
                <div className="text-center">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {posts: state.posts}
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: url => dispatch(actions.fetchPosts(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);