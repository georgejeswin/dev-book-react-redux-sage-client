import SignupImage from "../../assets/signup.png";
const Signup = () => {
  return (
    <div className="h-screen w-screen flex justify-center gap-4 items-center">
      <form action="" className="flex flex-col">
        <div className="flex items-center gap-4 justify-center">
          <h1 className="text-white uppercase text-2xl font-bold">Chat App</h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          // onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-input_shadow"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          // onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-input_shadow"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          // onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-input_shadow"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          // onChange={(e) => handleChange(e)}
          className="bg-transparent p-4 text-white w-[100%] text-base  focus:outline-none rounded-xl shadow-input_shadow"
        />
        <button
          type="submit"
          className=" text-indigo-500 p-4 font-bold border-none cursor-pointer rounded-lg uppercase shadow-button_shadow hover:shadow-button_shadow_hover"
        >
          Create User
        </button>
      </form>
      <div>
        <img src={SignupImage} alt="" />
      </div>
    </div>
  );
};

export default Signup;
