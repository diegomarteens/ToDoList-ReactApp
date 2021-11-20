import React from "react";

export function ToDo() {
	const [task, setTask] = React.useState("");
	const [list, setList] = React.useState([]);

	return (
		<div>
			<h5>ToDos List</h5>
			<input
				type="text"
				onChange={e => setTask(e.target.value)}
				value={task}
				onKeyDown={e => {
					if (e.key === "Enter") {
						const newList = list.concat([task]);
						setList(newList);
						setTask("");
					}
				}}
			/>

			<ul>
				{list.map((item, index) => {
					return (
						<li className="listItem" key={index}>
							{item}
							<button
								onClick={() => {
									const newListV = list.filter((e, i) => {
										return i !== index;
									});
									setList(newListV);
								}}></button>
						</li>
					);
				})}
				<p>{`There's ${list.length} items left`}</p>
			</ul>
		</div>
	);
}
