import { withFormik } from 'formik';
import LoginForm from "../components/LoginForm";
import validateForm from 'utils/validateForm';

export default withFormik({
    validate: values => {
        let errors = {};
        
        validateForm({isAuth: true, errors, values});

        return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 500);
    },
    displayName: 'LoginForm',
})(LoginForm);