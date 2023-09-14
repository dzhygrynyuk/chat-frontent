const validate = ({ isAuth }) => ({
    email: (errors, value) => {
        if(!value){
            errors.email = 'Required';
        }else if(
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ){
            errors.email = 'Invalid email address'; 
        }
    },
    password: (errors, value) => {
        if(!value){
            errors.password = 'Required';
        }else if(
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(value)
        ){
            errors.password = isAuth ? 'Incorrect password' : 'Must contain at least one number and one uppercase and lowercase letter, and one special character, and at least 8 or more characters'; 
        }
    }
});

export default validate;