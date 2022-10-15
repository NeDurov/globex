import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
// import UserData from "./users.json";

function App() {
	const [data, setData] = useState();
	useEffect(() => {
		axios.get("http://localhost:3000/").then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<div className="App">
			{data ? <SearchBar data={data} /> : <div>Loading...</div>}
		</div>
	);
}

export default App;
