import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as combineActions } from '../../../reducers/combine';
import { Modal, Button } from 'antd';

const { popupClose } = combineActions    

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.isPopup, 
        }
        
    }

    handleOk = (e) => {
        e.preventDefault()
        this.setState({isVisible: false})
        this.props.popupClose()   
    }
    
    render() {
        const { message, title } = this.props.popupMsg
        const { isVisible } = this.state
        return (
            <div>
                <Modal
                    visible={isVisible}
                    title={title}
                    centered
                    onOk={this.handleOk}
                    footer={[
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                            OK
                        </Button>
                    ]}
                >
                    <p>{message}</p>
                </Modal>
            </div>
        );
    }
}

Popup.propTypes = {
    isPopup: PropTypes.bool.isRequired,
    popupMsg: PropTypes.object.isRequired,
};

Popup.defaultProps = {
    popupMsg: null
};

const mapDispatchToProps = (dispatch) => {
    return {
        popupClose: bindActionCreators(popupClose,dispatch),
    };
}

export default connect(null,mapDispatchToProps)(Popup);