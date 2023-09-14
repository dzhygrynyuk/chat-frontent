import { withFormik } from 'formik';
import RegisterForm from "../components/RegisterForm";
import validate from 'utils/validate';

export default withFormik({
    validate: values => {
        let errors = {};
        const validation = validate({isAuth: false});

        Object.keys(values).forEach(
            key => validation[key] && validation[key](errors, values[key])
        );

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