import './App.css';
import { Form } from './components/Form';

export const App = () => {
	return (
		<div className="container">
			<h1 className="text-center">Мой список задач!</h1>
			<Form />
		</div>
	);
};
