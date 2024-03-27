import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="side-nav">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/"> - Home </NavLink>
          </li>
          <li>
            <NavLink to="blogs/"> - Blogs </NavLink>
          </li>
          <li>
            <NavLink to="about-us/"> - About US </NavLink>
          </li>
          <li>
            <NavLink to="contact-us/"> - Contact US </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
