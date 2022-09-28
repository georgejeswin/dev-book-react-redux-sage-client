import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Username cannot be empty"),
  password: yup.string().required("Password cannot be empty"),
});

export const signupValidationSchema = yup.object().shape({
  username: yup.string().min(5).required("Username cannot be empty"),
  password: yup.string().min(5).required("Password cannot be empty"),
  confirmPassword: yup
    .string()
    .required()
    .min(5)
    .oneOf([yup.ref("password"), null], "passwords must match"),
  email: yup.string().email().required("Email cannot be empty"),
  firstName: yup.string().min(2).required("First Name cannot be empty"),
  lastName: yup.string().min(2).required("Last Name cannot be empty"),
});
