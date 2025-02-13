import { useState } from 'react';
import { FieldContainer } from '../Fileld/Field';
import { InformationContainer } from '../Information/information';
import styles from './game.module.css'; // CSS-модуль для стилей
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
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
				setField={setField}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
			/>
			<button onClick={resetGame} className={styles.btnReset}>
				Начать заново
			</button>
		</GameLayout>
	);
};
