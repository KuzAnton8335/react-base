import { useState } from 'react';
import '../../App.css';
import { useFetchTasks } from '../../hooks/useFetchTask';
import { useSearch } from '../../hooks/useSearch';
import { useTaskManagement } from '../../hooks/useTaskManagement';
import { ErrorMessage } from './ErrorMessage';
import { Loader } from './Loader';
import { SearchBar } from './SearchBar';
import { TaskInput } from './TaskInput';
import { TaskList } from './TaskList';

export const MainPage = () => {
	const { data, loading, error, setData } = useFetchTasks([]);
	const { task, setTask, editTaskId, setEditTaskId, addTask, editTask, deleteTask } =
		useTaskManagement(setData);
	const { searchTerm, handleSearchChange } = useSearch();
	const [isSorted, setIsSorted] = useState(false);

	const toggleSort = () => {
		setIsSorted((prevState) => !prevState);
	};

	const filteredTasks = data.filter((todo) =>
		todo.title.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const sortedTasks = isSorted
		? [...filteredTasks].sort((a, b) => (a.title || '').localeCompare(b.title || ''))
		: filteredTasks;

	return (
		<form className="needs-validation" onSubmit={editTaskId ? editTask : addTask}>
			<TaskInput
				task={task}
				setTask={setTask}
				editTaskId={editTaskId}
				onSubmit={editTaskId ? editTask : addTask}
			/>

			<div className="button-box">
				<button type="submit" className="btn btn-primary">
					{editTaskId ? 'Сохранить изменения' : 'Добавь задачу'}
				</button>
				<button type="button" onClick={toggleSort} className="btn btn-info">
					{isSorted ? 'Сбросить сортировку' : 'Сортировать задачи'}
				</button>
			</div>

			<SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
			{loading ? (
				<Loader />
			) : error ? (
				<ErrorMessage error={error} />
			) : (
				<TaskList
					tasks={[...sortedTasks]}
					setEditTaskId={setEditTaskId}
					setTask={setTask}
					deleteTask={deleteTask}
				/>
			)}
		</form>
	);
};
