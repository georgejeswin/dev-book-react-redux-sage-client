import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/signup.png";
import authSlice from "../../redux/slices/auth.slice";
import { loginValidationSchema } from "../../validations/auth";
import { toast } from "react-toastify";
import { PATH } from "../../routes/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitForm = async (values: {
    username: string;
    password: string;
  }) => {
    dispatch(
      authSlice.actions.login({
        ...values,
        callback: () => navigate(PATH.HOME),
      })
    );
    toast.info("Logging In....");
  };
  return (
    <div className="h-[90vh] flex justify-center gap-4 items-center flex-wrap w-[100%]">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmitForm(values).then(() => {
            setSubmitting(false);
          });
        }}
        validationSchema={loginValidationSchema}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <Form
            className="flex flex-col justify-center items-start min-w-[25%]"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-4 justify-center w-full">
              <h1 className="text-indigo-500 uppercase text-2xl font-bold mb-5">
                Login
              </h1>
            </div>
            <input
              type="text"
              placeholder="Username"
              autoComplete="username"
              name="username"
              value={values.username}
              onChange={handleChange}
              className="bg-transparent p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-linput_shadow dark:shadow-input_shadow mb-5"
            />
            <span className="text-sm text-red-300 mt-2 mb-2">
              {errors.username}
            </span>
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="bg-transparent p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-linput_shadow dark:shadow-input_shadow mb-5"
            />
            <span className="text-sm text-red-300 mt-2 mb-2">
              {errors.password}
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-indigo-500 p-4 font-bold border-none w-[100%] cursor-pointer rounded-lg uppercase shadow-lbutton_shadow dark:shadow-button_shadow dark:hover:shadow-button_shadow_hover mb-5"
            >
              Login
            </button>
            <span className="text-black dark:text-white uppercase ">
              Don't have an account ?{" "}
              <Link to="/signup" className="text-indigo-700 font-bol4 ">
                Register.
              </Link>
            </span>
          </Form>
        )}
      </Formik>
      <div className="flex items-center justify-center w-[50%] xs:hidden">
        <img src={LoginImage} width="100%" height="100%" alt="" />
      </div>
    </div>
  );
};

export default Login;
