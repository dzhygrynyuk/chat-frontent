import { withFormik } from 'formik';
import LoginForm from "../components/LoginForm";
import validateForm from 'utils/validate';
import axios from 'core/axios';

import { openNotification } from 'utils/helpers';

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
        return axios.post('/user/login', values)
                    .then(({ data }) => {
                        console.log(data);
                    })
                    .catch( error => {
                        const { message } = error.response.data;
                        openNotification({
                            title: "Authorization error",
                            text: message, 
                            type: 'error'
                        });
                    });
    },
    displayName: 'LoginForm',
})(LoginForm);