import React, { Component } from "react";
import FavoriteIcon from "../components/FavoriteIcon";
import "../styles/Favorite.css";

export default class Favorite extends Component {
	constructor(props) {
		super(props);
	}

	// handle favorite-icon by 'isFavorite'
	handleFavorite = () => {
		const { id, isFavorite } = this.props;
		if (isFavorite === null || isFavorite === "false") {
			this.props.addToFavorites(id);
		} else if (isFavorite === "true") {
			this.props.removeFromFavorites(id);
		}
	};

	render() {
		return (
			<FavoriteIcon
				isFavorite={this.props.isFavorite}
				handleFavorite={this.handleFavorite}
			/>
		);
	}
}
