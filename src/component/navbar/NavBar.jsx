import React from "react";
import "./NavBar.css";

function navbar() {
	return (
		<div className="navbar">
			<ul>
				<li href="#About">About</li>
				<li href="#Skills">Skills</li>
				<li href="#Portifolio">Portifolio</li>
				<li href="#Contacs">Contacts</li>
			</ul>
		</div>
	);
}

export default navbar;
