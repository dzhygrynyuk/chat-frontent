import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Block } from "components";
import { Form, Input } from "antd";

import './Auth.scss';

class Auth extends React.Component {
    render() {
      return (
        <section className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Login</h2>
                    <p>Please enter your login and password!</p>
                </div>
                <Block>
                    <Form className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                size="large"
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                size="large"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large">Login</Button>
                        </Form.Item>
                        <a className="auth__register-link" href="#">Registration</a>
                    </Form>
                </Block>
            </div>
        </section>
      )
    }
}

export default Auth;