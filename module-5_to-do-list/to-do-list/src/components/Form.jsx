import { useEffect, useState } from 'react';
export const Form = () => {
	const [task, setTask] = useState('');
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/todos',
				);
				if (!response.ok) {
					throw new Error('Сеть данных не в порядке!');
				}
				const result = await response.json();
				setData(result);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const handleInputChange = (e) => {
		setTask(e.target.value);
	};

	const handleAddTask = (e) => {
		e.preventDefault();
		if (task.trim()) {
			const newTask = {
				id: data.length + 1,
				title: task,
				completed: false,
			};
			setData([...data, newTask]);
			setTask('');
			setError(null);
		} else {
			setError('Введите задачу');
		}
	};

	const handleDeleteTask = (id) => {
		const updatedData = data.filter((todo) => todo.id !== id);
		setData(updatedData);
	};
	const handleSortTask = () => {
		const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
		setData(sortedData);
	};

	const handleToggleComplete = (id) => {
		const updatedData = data.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo,
		);
		setData(updatedData);
	};
	return (
		<form
			className="needs-validation"
			action="#"
			method="POST"
			onSubmit={handleAddTask}
		>
			<div className="form-group was-validated">
				<span className="form-label">Добавить новую задачу</span>
				<div className="input-box">
					<input
						type="text"
						placeholder="Новая задача"
						className="form-control"
						name="task_name"
						id="task_name"
						value={task}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="button-box">
					<button type="submint" className="btn btn-primary">
						Добавь задачу
					</button>
					<button
						type="submint"
						className="btn btn-info"
						onClick={() => handleSortTask()}
					>
						Отсортировать задачи
					</button>
				</div>
				<div className="invalid-feedback">add task</div>
			</div>

			{loading ? (
				<div className="loader-position" aria-live="polite">
					<div className="loader"></div>
				</div>
			) : error ? (
				<div className="error-message" aria-live="assertive">
					{error.message}
				</div>
			) : (
				<ul className="task-list">
					{data.map((todo) => (
						<li className="task-item" key={todo.id}>
							<div className="task-box">
								<p
									className={`task-text ${
										todo.completed ? 'completed' : ''
									}`}
								>
									{todo.title}
								</p>
								<div className="btn-group">
									<a
										className="update-task-link"
										href="#"
										onClick={() => handleToggleComplete(todo.id)}
									>
										<i className="fa-solid fa-pen"></i>
									</a>
									<a
										className="delete-task-link"
										href="#"
										onClick={() => handleDeleteTask(todo.id)}
									>
										<i className="fa-solid fa-trash"></i>
									</a>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</form>
	);
};
