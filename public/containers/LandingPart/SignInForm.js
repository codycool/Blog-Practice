import React, { Component } from 'react';
import { Form, Icon, Input, Button} from 'antd';

class SignInForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form', values)
                this.props.signIn(values)
            }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div style={{ minWidth:'300px',maxWidth: '500px',padding: '20px', borderRadius: '10px',background:'white',textAlign: 'left'}}>
                <Form onSubmit={this.handleSubmit} style={{border: '1px solid #black'}}>
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please lnput your Username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please lnput your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password" placeholder="Password"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <a href="" alt='forgot password' style={{float: 'right'}}>Forgot password</a>
                        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                            Log in
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        );
    }
}

export default SignInForm = Form.create()(SignInForm);