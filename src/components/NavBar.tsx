import Toggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div className="flex bg-slate-100 dark:bg-dbg_navbar justify-between items-center p-5 shadow-card_shadow">
      <h1 className="text-black dark:text-white font-bold text-lg">DevBook</h1>
      <div>
        <figure>
          <Toggle />
        </figure>
      </div>
    </div>
  );
};
export default NavBar;
