export const sortByKey = (array, key) => {
	const types = {
		title: "title",
		release_date: "release_date",
		episode_id: "episode_id",
	};
	const sortKey = types[key];
	return array.sort((a, b) => {
		let x = a[sortKey];
		let y = b[sortKey];
		return x < y ? -1 : x > y ? 1 : 0;
	});
};
