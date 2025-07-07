import { Link } from "react-router-dom";
import { useState } from "react";
import { LoginModal } from "./LoginModal"; // Asegúrate que la ruta esté correcta
import logo from '../assets/img/logo2.png';

export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false); // Controla si el modal está visible

  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </Link>

          <div className="d-flex align-items-center gap-3">
            <Link to="/character">
              <span className="navbar-brand mb-0 h1 text-white">Character</span>
            </Link>
            <Link to="/planets">
              <span className="navbar-brand mb-0 h1 text-white">Planets</span>
            </Link>
            <Link to="/starships">
              <span className="navbar-brand mb-0 h1 text-white">Starships</span>
            </Link>
            <Link to="/contacts">
              <span className="navbar-brand mb-0 h1 text-white">Contacts</span>
            </Link>
            <Link to="/">
              <button className="btn btn-warning text-dark">Favoritos</button>
            </Link>

            {/* Botón para mostrar el LoginModal */}
            <button
              className="btn btn-warning"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Si showLogin es true, muestra el modal */}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}
    </>
  );
};
