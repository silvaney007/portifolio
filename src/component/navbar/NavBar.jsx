import React from "react";
import "./NavBar.css";

const newStyle = (event) => {
	const navLinks = document.querySelectorAll(".nav-links li");

	navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navlinkFade 0.5s forwards ${index / 7 + 0.3}s`;
		}
	});

	document.querySelector(".minebar").classList.toggle("toggle");
};

function navbar() {
	return (
		<nav>
			<div className="nav-logo">Diney's Paradise</div>
			<ul className="nav-links">
				<li>
					<a href="About">About</a>
				</li>
				<li>
					<a href="Skills">Skills</a>
				</li>
				<li>
					<a href="Portifolio">Portifolio</a>
				</li>
				<li>
					<a href="Contacs">Contacts</a>
				</li>
			</ul>
			<div className="minebar" onClick={newStyle}>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
		</nav>
	);
}

export default navbar;
