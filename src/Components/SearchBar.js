import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import UsersData from "./UsersData";

function SearchBar({ data }) {
	const [filteredData, setFilteredData] = useState([...data]);

	const handleFilter = (e) => {
		let searchWord = e.target.value.toLowerCase();
		setFilteredData(
			data.filter((val) => {
				return val.name.toLowerCase().includes(searchWord);
			})
		);
	};
	return (
		<>
			<div className="search">
				<div className="searchInputs">
					<input type="text" onChange={handleFilter} />
					<div className="searchIcon">
						<SearchIcon color="secondary" />
					</div>
				</div>
			</div>
			<div className="dataResult">
				<UsersData data={filteredData} />
			</div>
		</>
	);
}

export default SearchBar;
