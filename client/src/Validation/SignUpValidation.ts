import * as yup from "yup";

export const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup
        .string()
        .required('Please enter your password')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must contain eight characters, one uppercase, one lowercase, one number and one special character"
        )
})