import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as authActions } from '../../reducers/auth';



const { signInRequest } = authActions

class SignForm extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100vh'}}>
                 
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInRequest: bindActionCreators(signInRequest,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(SignForm)
