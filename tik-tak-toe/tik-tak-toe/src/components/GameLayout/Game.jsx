import { useDispatch, useSelector } from 'react-redux';
import { setResetGame } from '../../actions/actions.js';
import { FieldContainer } from '../Fileld/Field';
import { InformationContainer } from '../Information/information';
import styles from './game.module.css';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const dispatch = useDispatch();

	// Выберите только необходимые части состояния
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);
	const field = useSelector((state) => state.field);

	const handleResetGame = () => {
		dispatch(setResetGame());
	};

	return (
		<GameLayout>
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldContainer
				field={field}
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
			/>
			<button onClick={handleResetGame} className={styles.btnReset}>
				Начать заново
			</button>
		</GameLayout>
	);
};
