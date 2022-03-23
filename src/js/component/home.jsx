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
		text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
		url: "https://media.istockphoto.com/photos/triangular-modern-lake-house-at-fall-picture-id1327080125?b=1&k=20&m=1327080125&s=170667a&w=0&h=MElJJ3dR0Ng3J1ux-384q4K5JC9WNJjLv6d2ttrsZlw=",
	},
	{
		title: "Title 2",
		text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
		url: "https://media.istockphoto.com/photos/serene-lake-in-the-autumn-picture-id1303383281?b=1&k=20&m=1303383281&s=170667a&w=0&h=0yHlz5FIp10ToxQwnqgXJqUrktz3s2hxBVnpqKDZIII=",
	},
	{
		title: "Title 3",
		text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
		url: "https://media.istockphoto.com/photos/morning-fog-over-a-beautiful-lake-surrounded-by-pine-forest-stock-picture-id1306075353?b=1&k=20&m=1306075353&s=170667a&w=0&h=kBJLk7mFIGCMCaczJ6A35NL7AWffc6wmGHtPdYFHfY0=",
	},
	{
		title: "Title 4",
		text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
		url: "https://media.istockphoto.com/photos/bird-flying-over-a-lake-summer-picture-id1307069993?b=1&k=20&m=1307069993&s=170667a&w=0&h=x_-RvZ26VqzW8k2XQeu1cH67uJR1tlnyKcfLS3S1BGw=",
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
