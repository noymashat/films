import React from "react";
import Film from "./Film";
import "../styles/Films.css";

export default function Films(props) {
	return (
		<div>
			{props.films.map((film, index) => (
				<div key={index} id={film.episode_id} className="film-container">
					<Film
						key={index}
						id={film.episode_id}
						title={film.title}
						episode_id={film.episode_id}
						director={film.director}
						producer={film.producer}
						release_date={film.release_date}
						characters={film.characters}
						imagePath={`ep${film.episode_id}`}
						isFavorite={film.isFavorite}
						addToFavorites={props.addToFavorites}
						removeFromFavorites={props.removeFromFavorites}
					/>
				</div>
			))}
		</div>
	);
}
