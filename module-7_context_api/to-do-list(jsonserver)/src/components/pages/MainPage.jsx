import '../../App.css';
import { SearchProvider } from '../context/SearchContext';
import { TaskProvider } from '../context/TaskContext';
import { SearchBar } from './SearchBar';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';

export const MainPage = () => {
	return (
		<TaskProvider>
			<SearchProvider>
				<div>
					<TaskForm />
					<SearchBar />
					<TaskList />
				</div>
			</SearchProvider>
		</TaskProvider>
	);
};
