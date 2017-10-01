import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';

class PostsNew extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
    }
    renderField(field) {
        const {meta: {touched, error}} = field;
        let className = `form-control ${touched && error ? 'redInput' : ''}`;
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className={className}
                    type="text"
                    {...field.input}
                />
                <div className="error"> {touched ? error : ''}</div>
            </div>
        )
    }

    renderContent(field) {
        const {meta: {touched, error}} = field;
        let className = `form-control ${touched && error ? 'redInput' : ''}`;
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <textarea
                    className={className}
                    name="text" rows="10" cols="10" wrap="soft"
                    {...field.input}
                ></textarea>
                <div className="error"> {touched ? error : ''}</div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="animated fadeIn formWidth">
                <form onSubmit={handleSubmit(this.onSubmit)} className="formBorder">
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Content"
                        name="content"
                        component={this.renderContent}
                    />
                    <div className="centerButtons">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/" className="btn btn-danger">Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Enter a title!';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories!';
    }
    if (!values.content) {
        errors.content = 'Enter some content!';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);