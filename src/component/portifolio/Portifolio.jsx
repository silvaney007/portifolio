import React from "react";
import "./Portifolio.css";
import img1 from "../../img/img2noskate.svg";

function portifolio() {
	return (
		<div className="portifolio">
			<h1>🌟Portifolio 🌟</h1>
			<div className="container-grid">
				<div className="grid-item">
					<div className="card-port">
						<button>
							<img className="img-port" src={img1} alt="logo" />
							<div className="detail-port">
								<h3 className="tittle-port">Ladding pages</h3>
							</div>
						</button>
					</div>
				</div>
				<div className="grid-item">
					<div className="card-port">
						<button>
							<img className="img-port" src={img1} alt="logo" />
							<div className="detail-port">
								<h3 className="tittle-port">Ladding pages</h3>
							</div>
						</button>
					</div>
				</div>
				<div className="grid-item">
					<div className="card-port">
						<button>
							<img className="img-port" src={img1} alt="logo" />
							<div className="detail-port">
								<h3 className="tittle-port">Ladding pages</h3>
							</div>
						</button>
					</div>
				</div>
				<div className="grid-item">
					<div className="card-port">
						<button>
							<img className="img-port" src={img1} alt="logo" />
							<div className="detail-port">
								<h3 className="tittle-port">Ladding pages</h3>
							</div>
						</button>
					</div>
				</div>
				<div className="grid-item">
					<div className="card-port">
						<button>
							<img className="img-port" src={img1} alt="logo" />
							<div className="detail-port">
								<h3 className="tittle-port">Ladding pages</h3>
							</div>
						</button>
					</div>
				</div>
				<div className="grid-item">
					<div className="card-port">
						<button>
							<img className="img-port" src={img1} alt="logo" />
							<div className="detail-port">
								<h3 className="tittle-port">Ladding pages</h3>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default portifolio;
