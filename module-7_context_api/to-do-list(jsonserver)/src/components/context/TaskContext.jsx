import { createContext, useContext, useState } from 'react';
import { useFetchTasks } from '../hooks/useFetchTask';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const { data, loading, error, setData } = useFetchTasks();
	const [task, setTask] = useState('');
	const [editTaskId, setEditTaskId] = useState(null);
	const [isSorted, setIsSorted] = useState(false);

	const addTask = (e) => {
		e.preventDefault();
		if (task) {
			setData((prev) => [
				...prev,
				{ id: Date.now(), title: task, completed: false },
			]);
			setTask('');
		}
	};

	const editTask = (e) => {
		e.preventDefault();
		if (editTaskId) {
			setData((prev) =>
				prev.map((t) => (t.id === editTaskId ? { ...t, title: task } : t)),
			);
			setTask('');
			setEditTaskId(null);
		}
	};

	const deleteTask = (id) => {
		setData((prev) => prev.filter((t) => t.id !== id));
	};

	const sortTasks = () => {
		setIsSorted((prev) => !prev);
		setData((prev) => {
			const sortedData = [...prev].sort((a, b) => {
				if (isSorted) {
					return a.title.localeCompare(b.title); // Ascending order
				} else {
					return b.title.localeCompare(a.title); // Descending order
				}
			});
			return sortedData;
		});
	};

	return (
		<TaskContext.Provider
			value={{
				data,
				loading,
				error,
				task,
				setTask,
				editTaskId,
				setEditTaskId,
				addTask,
				editTask,
				deleteTask,
				sortTasks,
				isSorted,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => {
	return useContext(TaskContext);
};
