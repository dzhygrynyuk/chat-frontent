import React from "react";
import { Link } from "react-router-dom";

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input } from "antd";

import { Button, Block } from "components";
import { validateField } from 'utils/helpers';

const LoginForm = props => {
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <div>
            <div className="auth__top">
                <h2>Login</h2>
                <p>Please enter your login and password!</p>
            </div>
            <Block>
                <Form className="login-form">
                    <Form.Item
                        validateStatus={
                            !touched.email ? '' : errors.email ? 'error' : 'success'
                        }
                        help={ !touched.email ? '' : errors.email }
                        hasFeedback
                    >
                        <Input
                            id="email"
                            prefix={
                                <MailOutlined className="site-form-item-icon" style={{ color: '#adadad' }} />
                            }
                            size="large"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={validateField('password', touched, errors)}
                        help={ !touched.password ? '' : errors.password }
                        hasFeedback
                    >
                        <Input
                            id="password"
                            prefix={
                                <LockOutlined className="site-form-item-icon" style={{ color: '#adadad' }} />
                            }
                            size="large"
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={handleSubmit} disabled={isSubmitting} type="primary" size="large">Login</Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/register">Registration</Link>
                </Form>
            </Block>
        </div>
    );
};

export default LoginForm;