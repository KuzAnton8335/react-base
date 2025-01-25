import { useState } from 'react';
import '../App.css';
import { useFetchTasks } from './hooks/useFetchTask';
import { useSearch } from './hooks/useSearch';
import { useTaskManagement } from './hooks/useTaskManagement';

export const Form = () => {
	const { data, loading, error, setData } = useFetchTasks();
	const { task, setTask, editTaskId, setEditTaskId, addTask, editTask, deleteTask } =
		useTaskManagement(setData);
	const { searchTerm, handleSearchChange } = useSearch();
	const [isSorted, setIsSorted] = useState(false);

	const toggleSort = () => {
		setIsSorted(!isSorted);
	};

	const filteredTasks = data.filter((todo) =>
		todo.title.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const sortedTasks = isSorted
		? [...filteredTasks].sort((a, b) => a.title.localeCompare(b.title))
		: filteredTasks;

	return (
		<form className="needs-validation" onSubmit={editTaskId ? editTask : addTask}>
			<div className="form-group was-validated">
				<span className="form-label">
					{editTaskId ? 'Редактировать задачу' : 'Добавить новую задачу'}
				</span>
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
					<button type="button" onClick={toggleSort} className="btn btn-info">
						{isSorted ? 'Сбросить сортировку' : 'Сортировать задачи'}
					</button>
				</div>
				<input
					type="text"
					placeholder="Поиск задач"
					value={searchTerm}
					onChange={handleSearchChange}
					className="form-control"
				/>
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
										onClick={() => deleteTask(todo.id)}
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
