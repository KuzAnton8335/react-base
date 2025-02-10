import { useTaskContext } from '../context/TaskContext';
import '../../App.css';

export const TaskItem = ({ todo }) => {
	const { setEditTaskId, setTask, deleteTask } = useTaskContext();

	return (
		<li className="task-item">
			<div className="task-box">
				<p className={`task-text ${todo.completed ? 'completed' : ''}`}>
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
					<a onClick={() => deleteTask(todo.id)} className="delete-task-link">
						<i className="fa-solid fa-trash"></i>
					</a>
				</div>
			</div>
		</li>
	);
};
