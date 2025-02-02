import { Link } from 'react-router-dom';
export const TaskItem = ({ todo, deleteTask }) => {
	return (
		<li className="task-item" key={todo.id}>
			<div className="task-box">
				<Link
					to={`/task/${todo.id}`}
					className={`task-text ${todo.completed ? 'completed' : ''}`}
				>
					{todo.title}
				</Link>
				<div className="btn-group">
					<a onClick={() => deleteTask(todo.id)} className="delete-task-link">
						<i className="fa-solid fa-trash"></i>
					</a>
				</div>
			</div>
		</li>
	);
};
