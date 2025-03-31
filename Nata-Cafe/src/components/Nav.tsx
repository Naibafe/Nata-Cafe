import Logo from "../assets/logo.png";

export default function Nav() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="nav-logo" />
      <div className="logo-sign">Nata - Cafe</div>
    </div>
  );
}
