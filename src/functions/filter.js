export const filterFavorites = (allFilms, films, filter) => {
	const types = {
		all: "all",
		favorites: "favorites",
	};
	const filterKey = types[filter];
	return filterKey === "all"
		? allFilms
		: films.filter((film) => film["isFavorite"] === "true");
};
