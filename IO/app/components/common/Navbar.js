import React from "react";
import { Link } from "react-router";

const Navbar = () => (
    <nav style={{ marginBottom: 0}} className="navbar navbar-inverse">
		<div className="container">
			<div className="navbar-header">
				<h2 style={styles.testcolor}><i className="fa fa-list-alt"></i> New York Times Search</h2>
			</div>
			<ul className="nav navbar-nav navbar-right">
				<li className={location.pathname === "/" && "active"}>
					<Link to="/">Home</Link>
				</li>
				<li className={location.pathname === "/favorites" && "active"}>
					<Link to="/saved">Saved</Link>
				</li>
			</ul>
		</div>
	</nav>
); 

const styles = {
    testcolor: {
        color: "white"
    }
};

export default Navbar;
