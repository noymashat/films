import React from "react";
import Form from "react-bootstrap/Form";
import { AiFillFilter } from "react-icons/ai";
export default function FilterDropdown(props) {
	const handleChange = (e) => {
		props.setFilter(e.target.value);
	};

	return (
		<div>
			<Form.Group>
				<Form.Control className="select" onChange={handleChange} as="select">
					<option value="all">All</option>
					<option value="favorites">Favorites</option>
				</Form.Control>
			</Form.Group>
		</div>
	);
}
