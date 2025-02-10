import { useTaskContext } from '../context/TaskContext';

export const TaskForm = () => {
	const { task, setTask, editTaskId, addTask, sortTasks, isSorted, editTask } =
		useTaskContext();

	return (
		<form onSubmit={editTaskId ? editTask : addTask}>
			<div className="form-group">
				<span className="form-label">
					{editTaskId ? 'Редактировать задачу' : 'Добавить новую задачу'}
				</span>
				<input
					type="text"
					placeholder={editTaskId ? 'Редактировать задачу' : 'Новая задача'}
					className="form-control"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					required
				/>
				<div className="button-box">
					<button type="submit" className="btn btn-primary">
						{editTaskId ? 'Сохранить изменения' : 'Добавь задачу'}
					</button>
					<button type="button" onClick={sortTasks} className="btn btn-info">
						{isSorted ? 'Сбросить сортировку' : 'Сортировать задачи'}
					</button>
				</div>
			</div>
		</form>
	);
};
