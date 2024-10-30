import React, { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

const App: React.FC = () => {
	const [employee, setEmployee] = useState(sampleEmployee);

	const getEmployee = () => {
		fetch("https://randomuser.me/api?nat=en")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			})
			.catch((error) =>
				console.error("Erreur lors de la récupération de l'employé :", error),
			);
	};

	return (
		<div className="App">
			<h1>Employee Information</h1>
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
};

export default App;
