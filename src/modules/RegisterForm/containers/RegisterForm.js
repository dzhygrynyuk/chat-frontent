import { withFormik } from 'formik';
import RegisterForm from "../components/RegisterForm";
import validateForm from 'utils/validateForm';

export default withFormik({
    validate: values => {
        let errors = {};
        
        validateForm({isAuth: false, errors, values});

        return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 500);
    },
    displayName: 'RegisterForm',
})(RegisterForm);