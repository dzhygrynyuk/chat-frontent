import { withFormik } from 'formik';
import LoginForm from "../components/LoginForm";
import validateForm from 'utils/validate';

import { store } from 'redux/store';
import { fetchUserLogin } from "redux/slices/usersSlice";

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: '',
    }),
    validate: values => {
        let errors = {};
        validateForm({isAuth: true, errors, values});
        return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
        store.dispatch(fetchUserLogin(values)).then(() => {
            setSubmitting(false);
        });
    },
    displayName: 'LoginForm',
})(LoginForm);