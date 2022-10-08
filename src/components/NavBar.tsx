import Toggle from "./ThemeToggle";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import authSlice from "../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import { PATH } from "../routes/constants";
import { BigHead } from "@bigheads/core";
import { getRandomOptions } from "../utils/bigHeads";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    dispatch(
      authSlice.actions.logout({
        callback: () => navigate(PATH.LOGIN),
      })
    );
  };
  return (
    <div className="flex bg-slate-100 dark:bg-dbg_navbar justify-between items-center p-3 shadow-card_shadow mb-5">
      <h1
        className="text-indigo-500 font-bold text-lg"
        onClick={() => navigate(PATH.HOME)}
      >
        DevBook
      </h1>
      <div className="flex items-center justify-between">
        <Toggle />
        <BsBoxArrowInRight
          className="text-2xl cursor-pointer text-black dark:text-white ml-2 mr-2"
          onClick={handleLogout}
        />
        <div
          className="w-[40px] flex justify-center items-center mb-3 ml-3 cursor-pointer"
          onClick={() => navigate(PATH.USER_PROFILE)!}
        >
          <BigHead {...getRandomOptions()} />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
