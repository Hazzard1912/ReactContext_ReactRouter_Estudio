import { Link, NavLink } from "react-router-dom";

/**
 * El Link nos permite hacer una redireccion sin hacer full 
 * refresh de la pagina, de modo que es especialmente util en
 * aplicaciones SPA. El link se renderiza como un anchor.
 * 
 * Luego, tenemos el NavLink que nos ayuda
 * a determinar de manera dinamica si un componente esta activo
 * o no. Esto lo aprovechamos para poner, en este ejemplo, la
 * clase active de manera condicional a nuestros links o anchors
 */

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            useContext
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link> */}
    </>
  );
};
