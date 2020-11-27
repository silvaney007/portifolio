import React from "react";
import "./Home.css";
import img1 from "../../img/img2noskate.svg";

const annimation = (event) => {

	const card = document.querySelector(".card");
	const container = document.querySelector(".home-container");
	const logo = document.querySelector(".logo img");
	const tittle = document.querySelector(".info h1");
	const description = document.querySelector(".info p");

	let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - event.pageY) / 25;

	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

	container.addEventListener("mouseenter", (event) => {
		card.style.transition = "none";
		//popout
		logo.style.transform = "translateZ(200px) rotateZ(-25deg)";
		tittle.style.transform = "translateZ(150px)";
		description.style.transform = "translateZ(125px)";
		description.style.transform = "translateZ(100px)";
	});

	container.addEventListener("mouseleave", (event) => {
		card.style.transition = "all 0.5s ease";
		card.style.transform = `rotateY(0deg) rotateX(0deg)`;
		logo.style.transform = "translateZ(0px) rotateZ(0deg)";
		tittle.style.transform = "translateZ(0px)";
		description.style.transform = "translateZ(0px)";
	});
};

function about() {
	return (
		<div className="home">
			<div className="home-container" onMouseMove={annimation}>
				<div className="card">
					<div className="logo">
						<div className="circle"></div>
						<img id="img1" src={img1} alt="logotipo1" />
					</div>
					<div className="info">
						<h1>Welcome</h1>
						<p>Just enjoy this journey</p>
					</div>
				</div>
			</div>
			</div>
	);
}

export default about;
