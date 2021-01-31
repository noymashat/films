import React, { Component } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import ep1 from "../assets/ep1.png";
import ep2 from "../assets/ep2.png";
import ep3 from "../assets/ep3.png";
import ep4 from "../assets/ep4.png";
import ep5 from "../assets/ep5.png";
import ep6 from "../assets/ep6.png";
import Favorite from "../containers/FavoriteContainer";
import CardContent from "./CardContent";
import "../styles/Film.css";

export default function Films(props) {
	const {
		id,
		title,
		episode_id,
		director,
		producer,
		release_date,
		characters,
		imagePath,
		isFavorite,
		addToFavorites,
		removeFromFavorites,
	} = props;

	const images = {
		ep1: ep1,
		ep2: ep2,
		ep3: ep3,
		ep4: ep4,
		ep5: ep5,
		ep6: ep6,
	};

	// manipulate producers string
	const handleProducersText = () => {
		return props.producer.split(",").map((producer, index) => (
			<span key={index}>
				{producer}
				<br className="space" />
			</span>
		));
	};

	// manipulate release date string
	const handleDateText = () => {
		let date = props.release_date.split("-");
		return `${date[2]}-${date[1]}-${date[0]}`;
	};

	return (
		<div className="card-div">
			<Container fluid>
				<CardGroup>
					<Card className="card">
						<Card.Img className="card-image" src={images[imagePath]} />
						<Card.Body className="card-body">
							<Card.Title className="card-title">{title}</Card.Title>
							<Card.Text className="card-text">
								<CardContent
									producer={producer}
									director={director}
									handleDateText={handleDateText}
									handleProducersText={handleProducersText}
								/>
							</Card.Text>
						</Card.Body>
						<Favorite
							id={id}
							isFavorite={isFavorite}
							addToFavorites={addToFavorites}
							removeFromFavorites={removeFromFavorites}
						/>
					</Card>
				</CardGroup>
			</Container>
		</div>
	);
}

// {producer.length > 20 ? (
// 	<span>
// 		<strong>Producer: </strong>
// 	</span>
// ) : (
// 	<span>
// 		<strong>Producers: </strong>
// 	</span>
// )}
// {producer.length > 20 ? (
// 	handleProducersText()
// ) : (
// 	<span>
// 		<br />
// 		{producer}
// 	</span>
// )}
// <br />
// <span>
// 	<strong>Director: </strong>
// </span>
// <span>
// 	<br />
// 	{director}
// </span>
// <br />
// <span>
// 	<strong>Release Date: </strong>
// </span>
// <span>
// 	<br />
// 	{handleDateText()}
// </span>
