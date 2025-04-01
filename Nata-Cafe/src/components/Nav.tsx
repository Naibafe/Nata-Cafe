import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Nav() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="nav-logo" />
      <div className="logo-sign">Nata - Cafe</div>
      <div className="nav-links">
        <NavLink to="/kontakt" className="link-element">
          <p>Kontakt</p>
        </NavLink>
        <NavLink to="/kontakt" className="link-element">
          <p>Kontakt</p>
        </NavLink>
        <NavLink to="/kontakt" className="link-element">
          <p>Kontakt</p>
        </NavLink>
      </div>
    </div>
  );
}
