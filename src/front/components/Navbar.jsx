import { Link } from "react-router-dom";
import logo from '../assets/img/logo2.png'; 

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-dark ">
			<div className="container">
				<Link to="/">
					 <img src={logo} alt="Logo" style={{ height: "40px" }} />
				</Link>
				<div className="ml-auto">
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
						<button className="btn btn-primary text-white">favaritos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};