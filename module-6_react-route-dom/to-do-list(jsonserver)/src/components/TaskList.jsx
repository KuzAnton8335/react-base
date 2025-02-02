import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, setEditTaskId, setTask, deleteTask }) => {
	return (
		<ul className="task-list">
			{tasks.map((todo) => (
				<TaskItem
					key={todo.id}
					todo={todo}
					setEditTaskId={setEditTaskId}
					setTask={setTask}
					deleteTask={deleteTask}
				/>
			))}
		</ul>
	);
};
