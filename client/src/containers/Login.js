import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {login} from '../actions';

class Login extends Component {
    constructor(props) {
        super(props);
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
    onSubmit(values) {
        this.props.login(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return(
            <div>
                <div className="formWidth">
                    <form onSubmit={handleSubmit(this.onSubmit)} className="formBorder">
                        <Field
                            label="Username"
                            name="username"
                            component={this.renderField}
                        />
                        <Field
                            label="Password"
                            name="password"
                            component={this.renderField}
                        />
                        <div className="centerButtons">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link to="/" className="btn btn-danger">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Enter a username';
    }
    if (!values.password) {
        errors.password = 'Enter a password';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(null, {login})(Login)
);
