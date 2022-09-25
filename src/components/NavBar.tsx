import Toggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div className="flex bg-slate-100 dark:bg-dbg_navbar justify-between items-center p-3 shadow-card_shadow mb-5">
      <h1 className="text-indigo-500 font-bold text-lg">DevBook</h1>
      <div>
        <figure>
          <Toggle />
        </figure>
      </div>
    </div>
  );
};
export default NavBar;
