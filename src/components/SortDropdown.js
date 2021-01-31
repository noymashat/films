import React from "react";
import Form from "react-bootstrap/Form";

export default function SortDropdown(props) {
	const handleChange = (e) => {
		props.setSort(e.target.value);
	};

	return (
		<Form.Group>
			<Form.Control className="select" onChange={handleChange} as="select">
				<option value="episode_id">Episode No.</option>
				<option value="release_date">Date</option>
				<option value="title">Title</option>
			</Form.Control>
		</Form.Group>
	);
}
