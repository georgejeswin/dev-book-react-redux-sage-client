import { Link } from "react-router-dom";
import SignupImage from "../../assets/signup.png";
const Signup = () => {
  return (
    <div className="h-[90vh] flex justify-center gap-4 items-center flex-wrap w-[100%]">
      <form
        action=""
        className="flex flex-col justify-center items-center min-w-[25%]"
      >
        <div className="flex items-center gap-4 justify-center">
          <h1 className=" text-indigo-500 uppercase text-2xl font-bold mb-5">
            Register
          </h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          // onChange={(e) => handleChange(e)}
          className="bg-transparent shadow-linput_shadow p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl dark:shadow-input_shadow mb-5"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          // onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-linput_shadow dark:shadow-input_shadow mb-5"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          // onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl  shadow-linput_shadow dark:shadow-input_shadow mb-5"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          // onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 text-dark dark:text-white w-[100%] text-base  focus:outline-none rounded-xl  shadow-linput_shadow dark:shadow-input_shadow mb-5"
        />
        <button
          type="submit"
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
      </form>
      <div className="flex items-center justify-center w-[50%]">
        <img
          src={SignupImage}
          width="100%"
          height="100%"
          alt=""
          className="min-w-0"
        />
      </div>
    </div>
  );
};

export default Signup;
