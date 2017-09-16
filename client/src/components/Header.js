import React from 'react';
import {connect} from 'react-redux';

const Header = props => {

    return(
        <div>
            <h1>This is the header</h1>
            <h4>This is from the redux store: {props.something}</h4>
            <h6>This is from the single source of truth also: {props.dude}</h6>
        </div>
    )
}

const mapStateToProps = ({something, dude}) => {
    return {something, dude}
}
export default connect(mapStateToProps)(Header)