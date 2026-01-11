import "./App.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { div, mul, myThinkFunction, sub, sum } from "./feature/claculation/claculationSlice";
function App() {
	const [firstNumberInput, setFirstNumberInput] = useState(null);
	const [secondNumberInput, setSecondNumberInput] = useState(null);
	const [result, setResult] = useState(null);
	const Reducstate = useSelector((state) => state.claculation.value)
	const dispatch = useDispatch();
	// EVENT HANDLERS
	function handleSumClick() {
		dispatch(sum({
			firstNumberInput,
			secondNumberInput,
		}))
	}
	useEffect(() => {
		dispatch(myThinkFunction());
	}, [])
	function handleSubClick() {
		dispatch(sub({
			firstNumberInput,
			secondNumberInput,
		}))
	}

	function handleMultClick() {
		dispatch(mul({
			firstNumberInput,
			secondNumberInput,
		}))
	}

	function handleDivClick() {
		dispatch(div({
			firstNumberInput,
			secondNumberInput,
		}))
	}

	return (
		<div className="App">
			<div
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
					background: "teal",
				}}
			>
				{/* FIRST INPUT */}
				<label>First Number</label>
				<input
					value={firstNumberInput}
					onChange={(e) => setFirstNumberInput(e.target.value)}
				/>

				{/* SECOND INPUT */}
				<label>Second Number</label>
				<input
					value={secondNumberInput}
					onChange={(e) => setSecondNumberInput(e.target.value)}
				/>

				<button onClick={handleSumClick}>sum</button>

				<button onClick={handleSubClick}>subtract</button>

				<button onClick={handleMultClick}>multiply</button>

				<button onClick={handleDivClick}>divide</button>

				<hr />

				<h2>{Reducstate}</h2>
			</div>
		</div>
	);
}

export default App;
