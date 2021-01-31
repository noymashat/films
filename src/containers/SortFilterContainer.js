import React from "react";
import FilterDropdown from "../components/FilterDropdown";
import SortDropdown from "../components/SortDropdown";
import "../styles/SortFilter.css";

export default function SortFilterContainer(props) {
	return (
		<div className="select-div">
			<FilterDropdown setFilter={props.setFilter} />
			<SortDropdown setSort={props.setSort} />
		</div>
	);
}
