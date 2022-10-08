import { BigHead } from "@bigheads/core";
import { getRandomOptions } from "../../utils/bigHeads";

const Profile = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="w-[100px] flex justify-center items-center mb-3 ml-3 cursor-pointer">
            <BigHead {...getRandomOptions()} />
          </div>
          <div>
            <p className="text-indigo-500 text-lg font-bold">User Name</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-indigo-500 font-bold mr-5">Connect to Calendly</p>
          <button
            type="submit"
            className="text-indigo-500 p-4 font-bold border-none w-[100px] cursor-pointer rounded-lg uppercase shadow-lbutton_shadow dark:shadow-button_shadow dark:hover:shadow-button_shadow_hover"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
