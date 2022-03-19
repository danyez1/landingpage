import React from "react";

export function Jumbotron(props) {
	return (
		<div className="Jumbotron bg-light ">
			<h1 className="display-4 bg-light">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet,. Donec laoreet tincidunt
				sollicitudin venenatis. Proin sagittis turpis semper purus.
				Phasellus ut consectetur mauris rhoncus. Donec vel ligula eu
				erat.
			</p>

			<p className="lead">
				<a
					className="btn btn-primary btn-lg margin-bottom"
					href="#"
					role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
}
