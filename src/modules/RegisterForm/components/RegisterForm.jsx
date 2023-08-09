import React from "react";
import { Link } from "react-router-dom";

import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input } from "antd";

import { Button, Block } from "components";

class RegisterForm extends React.Component {
    render() {
        return (
            <div>
                <div className="auth__top">
                    <h2>Registration</h2>
                    <p>Please enter your personal data!</p>
                </div>
                <Block>
                    <Form className="login-form">
                        <Form.Item>
                            <Input
                                prefix={
                                    <UserOutlined className="site-form-item-icon" style={{ color: '#adadad' }} />
                                }
                                size="large"
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={
                                    <MailOutlined className="site-form-item-icon" style={{ color: '#adadad' }} />
                                }
                                size="large"
                                placeholder="Email"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" style={{ color: '#adadad' }} />
                                }
                                size="large"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" style={{ color: '#adadad' }} />
                                }
                                size="large"
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large">Registration</Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/login">Login</Link>
                    </Form>
                </Block>
            </div>
        );
    }    
}

export default RegisterForm;