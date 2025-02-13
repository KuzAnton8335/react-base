import { useEffect, useState } from 'react';
import { FieldContainer } from '../Fileld/Field';
import { InformationContainer } from '../Information/information';
import store from '../store'; // Импортируем хранилище
import styles from './game.module.css'; // CSS-модуль для стилей
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [state, setState] = useState(store.getState()); // Локальное состояние для синхронизации с Redux

	useEffect(() => {
		// Подписываемся на изменения в хранилище
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		// Отписываемся при размонтировании компонента
		return () => unsubscribe();
	}, []);

	const resetGame = () => {
		store.dispatch({ type: 'RESET_GAME' }); // Отправляем действие для сброса игры
	};

	return (
		<GameLayout>
			<InformationContainer
				currentPlayer={state.currentPlayer}
				isGameEnded={state.isGameEnded}
				isDraw={state.isDraw}
			/>
			<FieldContainer
				field={state.field}
				currentPlayer={state.currentPlayer}
				isGameEnded={state.isGameEnded}
			/>
			<button onClick={resetGame} className={styles.btnReset}>
				Начать заново
			</button>
		</GameLayout>
	);
};
