import React from "react";
import { Link } from "react-router-dom";

import { LockOutlined, UserOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, Input } from "antd";

import { Button, Block } from "components";

const RegisterForm = props => {
    const success = false;

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    
    return (
        <div>
            <div className="auth__top">
                <h2>Registration</h2>
                <p>Please enter your personal data!</p>
            </div>
            <Block>
                {!success ? (
                    <Form className="login-form" onSubmit={handleSubmit}>
                        <Form.Item>
                            <Input
                                prefix={
                                    <UserOutlined className="site-form-item-icon" style={{ color: '#adadad' }} />
                                }
                                size="large"
                                placeholder="Username"
                            />
                        </Form.Item>
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
                            validateStatus={
                                !touched.password ? '' : errors.password ? 'error' : 'success'
                            }
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
                            <Button onClick={handleSubmit} type="primary" size="large">Registration</Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/login">Login</Link>
                    </Form>
                ) : (
                    <div className="auth__success-block">
                        <div>
                            <ExclamationCircleOutlined className="site-form-item-icon" style={{ color: '#177CFA' }} />
                        </div>
                        <h2>Confirm your account</h2>
                        <p>You have been sent an email with a link to confirm your account.</p>
                    </div>
                )}
            </Block>
        </div>
    );
};

export default RegisterForm;