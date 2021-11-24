import React from "react";
import PropTypes from "prop-types";
import { getTodos, updateTodos, createTodos } from "./api";

export function ToDo() {
	const [task, setTask] = React.useState("");
	const [list, setList] = React.useState([]);

	React.useEffect(() => {
		const fn = async () => {
			let todos = await getTodos();
			if (todos === null) {
				await createTodos();
				todos = await getTodos();
			}
			setList(todos.map(x => x.label));
		};
		fn();
	}, []);

	React.useEffect(() => {
		const newFn = async () => {
			await updateTodos(list.map(x => ({ label: x, done: false })));
		};
		newFn();
	}, [list]);

	React.useEffect(() => {
		console.log(list);
	}, [list]);

	return (
		<div>
			<h5 className="header">
				<i className="fas fa-list-ul"></i>
				To Do List!
			</h5>
			<input
				type="text"
				placeholder="What need TGD?"
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

			<ul className="list-group">
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
								}}>
								<i className="fas fa-check-circle"></i>
							</button>
						</li>
					);
				})}
				<p>
					<strong>{`There's ${list.length} items left`}</strong>
				</p>
			</ul>
		</div>
	);
}
