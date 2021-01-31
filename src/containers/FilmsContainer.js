import React, { Component } from "react";
import Films from "../components/Films";
import { Spinner } from "react-bootstrap";
import SortFilterContainer from "./SortFilterContainer";
import { sortByKey } from "../functions/sort";
import { filterFavorites } from "../functions/filter";
import axios from "axios";
import "../styles/Films.css";

export default class FilmsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			allFilms: [],
			films: [],
			error: null,
			filter: "all",
			sort: "episode_id",
		};
		this.getFilms = this.getFilms.bind(this);
	}

	// change state when getFilms succeeds
	setAllFilms = (films) => {
		this.setState({ isLoaded: true, allFilms: films });
	};

	// change state when getFilms succeeds
	setFilms = (films) => {
		this.setState({ films });
	};

	// change state when getFilms fails
	setError = (error) => {
		this.setState({ isLoaded: true, error: error });
	};

	// change filter by selection
	setFilter = (filter) => {
		this.setState({ filter });
		const { allFilms, films } = this.state;
		const data = filterFavorites(allFilms, films, filter);
		this.setFilms(data);
	};

	// change sort method by selection
	setSort = (sort) => {
		this.setState({ sort });
		const data = sortByKey(this.state.films, sort);
		this.setFilms(data);
	};

	// handle add to favorites in 'isFavorite' and local storage by film id (episode_id)
	addToFavorites = (id) => {
		localStorage.setItem(id, "true");
		const filmList = this.state.films.map((film) => {
			if (film.episode_id === id) {
				return { ...film, isFavorite: "true" };
			} else {
				return { ...film };
			}
		});
		this.setFilms(filmList);
		const allFilmsList = this.state.allFilms.map((film) => {
			if (film.episode_id === id) {
				return { ...film, isFavorite: "true" };
			} else {
				return { ...film };
			}
		});
		this.setAllFilms(allFilmsList);
	};

	//handle remove from favorites in 'isFavorite' and local storage by film id (episode_id)
	removeFromFavorites = (id) => {
		localStorage.setItem(id, "false");
		const filmList = this.state.films.map((film) => {
			if (film.episode_id === id) {
				return { ...film, isFavorite: "false" };
			} else {
				return { ...film };
			}
		});
		this.setFilms(filmList);
		const allFilmsList = this.state.allFilms.map((film) => {
			if (film.episode_id === id) {
				return { ...film, isFavorite: "false" };
			} else {
				return { ...film };
			}
		});
		this.setAllFilms(allFilmsList);
	};

	// api request for films
	getFilms = () => {
		return axios
			.get("https://swapi.dev/api/films/")
			.then((res) => {
				if (res.data) {
					let data = res.data.results;
					data = data.map((film) => {
						const fav = localStorage.getItem(film.episode_id);
						return { ...film, isFavorite: fav };
					});
					data = sortByKey(data, this.state.sort);
					this.setFilms(data);
					this.setAllFilms(data);
				}
			})
			.catch((err) => {
				this.setError(err);
			});
	};

	componentDidMount() {
		this.getFilms();
	}

	render() {
		let isLoaded = this.state.isLoaded;
		let error = this.state.error;
		let films = this.state.films;

		return isLoaded ? (
			<div className="films-container">
				<SortFilterContainer
					setFilter={this.setFilter}
					setSort={this.setSort}
				/>
				<Films
					films={films}
					addToFavorites={this.addToFavorites}
					removeFromFavorites={this.removeFromFavorites}
				/>
			</div>
		) : error !== null ? (
			<div>
				<p>There has been an error: {error}</p>
			</div>
		) : (
			<div>
				<Spinner animation="border" variant="light" />
			</div>
		);
	}
}
