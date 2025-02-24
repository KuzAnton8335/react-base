import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, editTask, fetchTasks } from '../actions/taskActions';
import { toggleSort } from '../actions/uiActions';
import '../App.css';

export const Form = () => {
	const dispatch = useDispatch();
	const { data: tasks } = useSelector((state) => state.tasks);
	const { loading, error, isSorted } = useSelector((state) => state.ui);

	const [task, setTask] = useState('');
	const [editTaskId, setEditTaskId] = useState(null);
	const [search, setSearch] = useState('');

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

	const handleAddOrEditTask = (e) => {
		e.preventDefault();
		if (editTaskId) {
			dispatch(editTask({ id: editTaskId, title: task }));
			setEditTaskId(null);
		} else {
			dispatch(addTask({ id: Date.now(), title: task, completed: false }));
		}
		setTask('');
	};

	const handleDeleteTask = (id) => {
		dispatch(deleteTask(id));
	};

	const filteredTasks = tasks.filter((todo) =>
		todo.title.toLowerCase().includes(search.toLowerCase()),
	);

	const sortedTasks = isSorted
		? [...filteredTasks].sort((a, b) => a.title.localeCompare(b.title))
		: filteredTasks;

	return (
		<form className="needs-validation" onSubmit={handleAddOrEditTask}>
			<div className="form-group was-validated">
				<div className="input-box">
					<input
						type="text"
						placeholder={editTaskId ? 'Редактировать задачу' : 'Новая задача'}
						className="form-control"
						value={task}
						onChange={(e) => setTask(e.target.value)}
						required
					/>
				</div>
				<div className="button-box">
					<button type="submit" className="btn btn-primary">
						{editTaskId ? 'Сохранить изменения' : 'Добавь задачу'}
					</button>
					<button
						type="button"
						onClick={() => dispatch(toggleSort())}
						className="btn btn-info"
					>
						{isSorted ? 'Сбросить сортировку' : 'Сортировать задачи'}
					</button>
				</div>
			</div>

			{/* Search Input Field */}
			<div className="form-group search-box">
				<input
					type="text"
					placeholder="Поиск задач"
					className="form-control"
					value={search}
					onChange={(e) => setSearch(e.target.value)} // Update search state
				/>
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
					{sortedTasks.map((todo) => (
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
										onClick={() => {
											setEditTaskId(todo.id);
											setTask(todo.title);
										}}
										className="update-task-link"
									>
										<i className="fa-solid fa-pen"></i>
									</a>
									<a
										onClick={() => handleDeleteTask(todo.id)}
										className="delete-task-link"
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
