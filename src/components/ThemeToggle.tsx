import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { BsSun, BsMoonFill } from "react-icons/bs";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <BsSun
          color="white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-2xl cursor-pointer"
        />
      ) : (
        <BsMoonFill
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
