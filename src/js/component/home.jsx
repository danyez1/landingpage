import React from "react";
import { Card } from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { NavBar } from "./NavBar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<NavBar />
			<Jumbotron />
			<div className="row">
				<div className="col">
					<Card />
				</div>

				<div className="col">
					<Card />
				</div>

				<div className="col">
					<Card />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
