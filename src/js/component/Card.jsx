import React from "react";

export function Card(props) {
	console.log(props);
	const cardList = props.data.map((card, index) => {
		return (
			<div key={index} className="card " style={{ width: 450 }}>
				<img
					className="card-img-top "
					src={card.url}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{card.title}</h5>
					<p className="card-text">{card.text}</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		);
	});
	return (
		<div
			style={{
				display: "flex",
				marginTop: "60px",
				justifyContent: "space-around",
				height: "10cm",
				flexDirection: "row",
				flexWrap: "wrap",
				backgroundColor: "black",
			}}>
			{cardList}
		</div>
	);
}
export default Card;
