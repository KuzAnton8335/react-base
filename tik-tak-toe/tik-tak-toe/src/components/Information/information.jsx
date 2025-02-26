import { useSelector } from 'react-redux';
import './information.module.css';
import InformationLayout from './InformationLayout';

export const InformationContainer = () => {
	// Выберите только необходимые части состояния
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);

	return (
		<InformationLayout>
			{isDraw
				? 'Ничья'
				: isGameEnded
				? `Победа: ${currentPlayer}`
				: `Ходит: ${currentPlayer}`}
		</InformationLayout>
	);
};
