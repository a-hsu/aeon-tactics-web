import axios from "axios";
import { useEffect, useState } from "react";
const TestComponent = () => {
	const [counter, setCounter] = useState(0);
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const handleClick = (e: any) => {
		e.preventDefault();
		let newVal = counter;
		if (e.target.value == "up") {
			newVal++;
			setCounter(newVal);
		}
		if (e.target.value == "down") {
			newVal--;
			setCounter(newVal);
		}
		window.localStorage.setItem("counter", `${newVal}`);
	};
	useEffect(() => {
		if (localStorage.getItem("counter") != null)
			setCounter(parseInt(localStorage.getItem("counter")!));
		setIsLoading(false);
	}, []);

	useEffect(() => {
		console.log("counter: ", counter);
		const getData = async () => {
			console.log("im here");
			const response = await axios.get("http://localhost:8080/cats/andrew");
			setData(response.data);
		};
		getData();
		console.log(data);
	}, [counter]);

	return (
		<div className="grid grid-flow-col grid-cols-3 grid-rows-1">
			<button onClick={handleClick} value="up">
				Up
			</button>
			<button onClick={handleClick} value="down">
				Down
			</button>
			{isLoading ? <div></div> : <p className="text-center">{counter}</p>}

			<p></p>
		</div>
	);
};
export default TestComponent;
