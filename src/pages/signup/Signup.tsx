import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SignupImage from "../../assets/signup.png";
import { signupParams } from "../../interfaces/auth";
import authSlice from "../../redux/slices/auth.slice";
import { PATH } from "../../routes/constants";
import { signupValidationSchema } from "../../validations/auth";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignup = async (values: signupParams) => {
    dispatch(
      authSlice.actions.signup({
        ...values,
        callback: () => navigate(PATH.HOME),
      })
    );
  };
  return (
    <div className="h-[90vh] flex justify-center gap-4 items-center flex-wrap w-[100%]">
      <Formik
        initialValues={{
          username: "",
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSignup(values).then(() => {
            setSubmitting(false);
          });
        }}
        validationSchema={signupValidationSchema}
      >
        {({
          values,
          errors,
          handleChange,
          // handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            className="flex flex-col justify-center items-start min-w-[25%]"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-4 justify-center w-full">
              <h1 className=" text-indigo-500 uppercase text-2xl font-bold mb-5">
                Register
              </h1>
            </div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              className="bg-transparent shadow-linput_shadow p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl dark:shadow-input_shadow mb-5"
            />
            <span className="text-sm text-red-300 mt-1 mb-1">
              {errors.username}
            </span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="bg-transparent p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-linput_shadow dark:shadow-input_shadow mb-5"
            />
            <span className="text-sm text-red-300 mt-1 mb-1">
              {errors.email}
            </span>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              className="bg-transparent shadow-linput_shadow p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl dark:shadow-input_shadow mb-5"
            />
            <span className="text-sm text-red-300 mt-1 mb-1">
              {errors.firstName}
            </span>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              className="bg-transparent shadow-linput_shadow p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl dark:shadow-input_shadow mb-5"
            />
            <span className="text-sm text-red-300 mt-1 mb-1">
              {errors.lastName}
            </span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="bg-transparent p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl  shadow-linput_shadow dark:shadow-input_shadow mb-5"
            />
            <span className="text-sm text-red-300 mt-1 mb-1">
              {errors.password}
            </span>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              className="bg-transparent p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl  shadow-linput_shadow dark:shadow-input_shadow mb-5"
            />
            <span className="text-sm text-red-300 mt-1 mb-1">
              {errors.confirmPassword}
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-indigo-500 p-4 font-bold border-none w-[100%] cursor-pointer rounded-lg uppercase shadow-lbutton_shadow dark:shadow-button_shadow dark:hover:shadow-button_shadow_hover mb-5"
            >
              Register
            </button>
            <span className="text-black dark:text-white uppercase ">
              Already have an account ?{" "}
              <Link to="/login" className="text-indigo-700 font-bol4 ">
                Login.
              </Link>
            </span>
          </Form>
        )}
      </Formik>
      <div className="flex items-center justify-center w-[50%] xs:hidden">
        <img src={SignupImage} width="100%" height="100%" alt="" />
      </div>
    </div>
  );
};

export default Signup;
