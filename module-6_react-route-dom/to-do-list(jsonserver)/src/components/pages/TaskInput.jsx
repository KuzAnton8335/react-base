export const TaskInput = ({ task, setTask, editTaskId, onSubmit }) => {
	return (
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
		</div>
	);
};
