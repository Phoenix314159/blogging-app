import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts(`/api/getposts`);
    }

    renderPosts() {
        const {loggedIn, currentUser} = this.props.auth;
        if (loggedIn && currentUser) {
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
        return (
            <div>
                <h1 className="animated slideInUp textWhite">Welcome to Blogger</h1>
            </div>
        )

    }

    render() {
        const {loggedIn, userAlert} = this.props.auth;
        return (
            <div className={"animated fadeIn container postsBorder " + (!userAlert ? 'show' : 'hidden')}>
                <h3 className={"text-center " + (loggedIn ? 'show' : 'hidden')}>Posts</h3>
                <ul className="list-group totalPosts">
                    {this.renderPosts()}
                </ul>
                <div className={"text-center " + (loggedIn ? 'show' : 'hidden')}>
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
        fetchPosts: url => dispatch(fetchPosts(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);