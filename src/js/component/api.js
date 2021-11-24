export async function getTodos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/diegosilva"
	);

	if (response.status === 200) {
		const payload = await response.json();

		return payload;
	}

	return null;
}

export async function createTodos() {
	await fetch("https://assets.breatheco.de/apis/fake/todos/user/diegosilva", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify([])
	});
}

export async function updateTodos(todos) {
	await fetch("https://assets.breatheco.de/apis/fake/todos/user/diegosilva", {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(todos)
	});
}

export async function deleteTodos() {
	await fetch("https://assets.breatheco.de/apis/fake/todos/user/diegosilva", {
		method: "DELETE"
	});
}
