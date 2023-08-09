import React from "react";
import {Routes, Route} from 'react-router-dom';

import { LoginForm, RegisterForm } from 'modules';

import './Auth.scss';

class Auth extends React.Component {
    render() {
      return (
        <section className="auth">
            <div className="auth__content">
                <Routes>
                    <Route exact path="/" element={<LoginForm />} />
                    <Route exact path="/login" element={<LoginForm />} />
                    <Route exact path="/register" element={<RegisterForm />} />
                </Routes>
            </div>
        </section>
      )
    }
}

export default Auth;