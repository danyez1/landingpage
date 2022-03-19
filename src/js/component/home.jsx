import React from "react";
import { Card } from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { NavBar } from "./NavBar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const data = [
	{
		title: "Title 1",
		text: "Title 1",
		url: "https://media-cdn.tripadvisor.com/media/photo-s/01/7a/07/a1/muchos-rios-y-lagos.jpg",
	},
	{
		title: "Title 2",
		text: "Text 2",
		url: "https://media-cdn.tripadvisor.com/media/photo-s/04/0d/ea/af/casa-kalfu.jpg",
	},
	{
		title: "Title 3",
		text: "Text3",
		url: "https://picsum.photos/200/300",
	},
	{
		title: "Title 4",
		text: "Text4",
		url: "https://picsum.photos/200/300",
	},
];
const Home = () => {
	return (
		<React.Fragment>
			<NavBar />
			<Jumbotron />
			<Card data={data} />
		</React.Fragment>
	);
};

export default Home;
