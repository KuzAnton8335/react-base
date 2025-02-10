import '../../App.css';
import { useSearchContext } from '../context/SearchContext';
import { useTaskContext } from '../context/TaskContext';
import { TaskItem } from './TaskItem';

export const TaskList = () => {
	const { data, loading, error } = useTaskContext();
	const { searchTerm } = useSearchContext();

	const filteredTasks = data.filter((todo) =>
		todo.title.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	if (loading) {
		return (
			<div className="loader-position">
				<div className="loader"></div>
			</div>
		);
	}

	if (error) {
		return <div className="error-message">{error.message}</div>;
	}

	return (
		<ul className="task-list">
			{filteredTasks.map((todo) => (
				<TaskItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
