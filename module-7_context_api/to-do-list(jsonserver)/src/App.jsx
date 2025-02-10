import './App.css';
import { MainPage } from './components/pages/MainPage';

export const App = () => {
	return (
		<div className="container">
			<h1 className="text-center">Мой список задач!</h1>
			<MainPage />
		</div>
	);
};
