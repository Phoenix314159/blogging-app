import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../actions/index';


class Login extends Component {
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


    render() {
        return(
            <div>
                <div className="formWidth">
                    <form  className="formBorder">
                        <Field
                            name="username"
                            component={this.renderField}
                        />
                        <Field
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
    if (!values.title) {
        errors.title = 'Enter a username';
    }
    if (!values.password) {
        errors.categories = 'Enter some categories!';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(null, actions.login)(Login)
);
