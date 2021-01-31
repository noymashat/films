import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "../styles/Jumbo.css";

export const Jumbotron = () => {
	return (
		<Jumbo fluid className="jumbo">
			<div></div>
			<Container>
				<p className="p-height">.</p>
			</Container>
		</Jumbo>
	);
};
