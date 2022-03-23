import React from "react";

export function NavBar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-3 fs-2">
			<a className="navbar-brand bg-dark fs-4" href="#">
				Start Booststrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse d-flex flex-row-reverse bd-highlight me-5 fs-4"
				id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto ">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact Me
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
