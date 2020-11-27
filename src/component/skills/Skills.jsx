import React from "react";
import "./Skills.css";
import img1 from "../../img/img2noskate.svg";


function skills() {
	return (
		<div className="skills">
			<div className="skills-tittle">
				<h1> 🌟Skills 🌟</h1>
			</div>
			<div className="skills-container">
				<div className="skill">
					<img className="image" src={img1} alt="logo" />
					<div className="about">
						<h3 className="tittle">Ladding pages</h3>
						<p className="discription">projet for ladding pages</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default skills;
