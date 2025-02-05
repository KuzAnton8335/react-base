import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Form } from './components/Form';
import { NotFound } from './components/NotFound';
import { TaskDetail } from './components/TaskDetails';

export const App = () => {
	return (
		<Router>
			<div className="container">
				<h1 className="text-center">Мой список задач!</h1>
				<Routes>
					<Route path="/" element={<Form />} />
					<Route path="/task/:id" element={<TaskDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
		// доделать следующие пункты по заданию
	);
};
