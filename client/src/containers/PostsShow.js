import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
    constructor(props) {
        super(props);
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
        const {post} = this.props;
        if (!post) {
            return <div>Loading...</div>
        }
        return (
            <div className="formWidth">
                <div className="singlePost">
                    <h2>Title</h2>
                    <hr className="one"/>
                    <h3>{post.title}</h3>
                    <hr className="two"/>
                    <h2>Categories</h2>
                    <hr className="one"/>
                    <h3>{post.categories}</h3>
                    <hr className="two"/>
                    <h2>Content</h2>
                    <hr className="one"/>
                    <p>{post.content}</p>
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
    return {post: posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
