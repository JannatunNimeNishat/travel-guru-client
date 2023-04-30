import * as Yup from 'yup'

const registerSchema = Yup.object({
    first_name: Yup
        .string()
        .required('please enter your first name'),
    last_name: Yup
        .string()
        .required('please enter your last name'),
    email: Yup
        .string()
        .required('please enter your email address')
        .email('invalid email address'),
    password: Yup
        .string()
        .required('please enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    confirm_password: Yup
        .string()
        .required('please re-enter your password')
        .oneOf([Yup.ref("password"),null],'Password must match')

})
export default registerSchema; 
