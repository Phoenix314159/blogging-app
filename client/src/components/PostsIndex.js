import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();

    }
    render() {
        return (
            <div>
                <h1>Posts Index</h1>
            </div>
        )
    }
}

export default connect(null, {fetchPosts})(PostsIndex);