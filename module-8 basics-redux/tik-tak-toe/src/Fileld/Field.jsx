import store from '../store';
import FieldLayout from './FieldLayout';

export const FieldContainer = () => {
	const state = store.getState();

	const handleCellClick = (index) => {
		if (state.field[index] || state.isGameEnded) return;

		const newField = [...state.field];
		newField[index] = state.currentPlayer;

		store.dispatch({ type: 'SET_FIELD', payload: newField });

		if (checkWin(newField, state.currentPlayer)) {
			store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			return;
		}

		if (newField.every((cell) => cell !== '')) {
			store.dispatch({ type: 'SET_IS_DRAW', payload: true });
			return;
		}

		store.dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: state.currentPlayer === 'X' ? '0' : 'X',
		});
	};

	const checkWin = (field, player) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === player),
		);
	};

	return <FieldLayout field={state.field} onCellClick={handleCellClick} />;
};
