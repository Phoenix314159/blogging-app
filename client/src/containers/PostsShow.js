import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
    constructor(props) {
        super(props)
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentDidMount() {
        if (!this.props.post) {
            const {id} = this.props.match.params;
            this.props.fetchPost(id);
        }
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        console.log(this.props)
        const {post} = this.props;
        if (!post) {
            return <div>Loading...</div>
        }
        return (
            <div className="singlePost">
                <h2>Title</h2>
                <hr/>
                <h3>{post.title}</h3>
                <h2>Categories</h2>
                <hr/>
                <h3>{post.categories}</h3>
                <h2>Content</h2>
                <hr/>
                <p>{post.content}</p>
                <Link to="/" className="btn btn-primary">Back To List of Posts</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                >Delete Post</button>
            </div>
        )
    }
}
const mapStateToProps = ({posts}, ownProps) => {
    return {post: posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
