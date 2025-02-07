import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, ...props }) => {
	return (
		<ul className="task-list">
			{tasks.map((todo) => (
				<TaskItem key={todo.id} todo={todo} {...props} />
			))}
		</ul>
	);
};
