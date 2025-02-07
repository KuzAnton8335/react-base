import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/pages/MainPage';
import { NotFound } from './components/pages/NotFound';
import { TaskDetail } from './components/pages/TaskDetails';

export const App = () => {
	return (
		<Router>
			<div className="container">
				<h1 className="text-center">Мой список задач!</h1>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/task/:id" element={<TaskDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
		// доделать следующие пункты по заданию
	);
};
