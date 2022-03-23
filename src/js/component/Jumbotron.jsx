import React from "react";

export function Jumbotron(props) {
	return (
		<div className="Jumbotron bg-light ">
			<h1 className="display-4 bg-light p-3">A Warm Welcome!</h1>
			<p className="lead p-3">
				Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
				eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrum exercitationem ullam corporis
				suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
				Quis aute iure reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
				cupiditat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>

			<p className="lead p-3">
				<a
					className="btn btn-primary btn-lg margin-bottom "
					href="#"
					role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
}
