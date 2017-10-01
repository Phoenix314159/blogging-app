import React, {Component} from 'react';
import {connect} from 'react-redux';

class Welcome extends Component {
    render() {
        if (this.props.auth.name) {
            return (
                <div className="welcomeHeader">
                    <h1>Welcome {this.props.auth.name}!</h1>
                </div>
            )
        }
        return (
            <div></div>
        )
    }
}
const mapStateToProps = ({auth}) => {
    return {auth}
}
export default connect(mapStateToProps, null)(Welcome);
