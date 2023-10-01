import { Outlet, NavLink } from "react-router-dom";
import styleClasses from "./Nav.module.scss";

function Nav() {
  console.log("Nav.render()");
  return (
    <>
      <nav className={`bg-green-500 text-white ${styleClasses["nav"]}`}>
        <ul
          className={`flex flex-row items-center justify-evenly p-2 ${styleClasses["nav__list"]}`}
        >
          <li className={`${styleClasses["nav__list-item"]}`}>
            <NavLink
              className="text-white hover:text-white hover:underline"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={`${styleClasses["nav__list-item"]}`}>
            <NavLink
              className="text-white hover:text-white hover:underline"
              to="/example"
            >
              Example
            </NavLink>
          </li>
          <li className={`${styleClasses["nav__list-item"]}`}>
            <NavLink
              className="text-white hover:text-white hover:underline"
              to="/map"
            >
              Map
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Nav;
