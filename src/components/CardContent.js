import React from "react";

export default function CardContent(props) {
	const { producer, director, handleDateText, handleProducersText } = props;
	return (
		<span>
			{producer.length > 20 ? (
				<strong>Producers: </strong>
			) : (
				<strong>Producer: </strong>
			)}
			<br />
			{handleProducersText()}
			<br />
			<strong>Director: </strong>
			<br />
			<span>{director}</span>
			<br />

			<strong>Release Date: </strong>
			<br />
			<span>{handleDateText()}</span>
		</span>
	);
}
