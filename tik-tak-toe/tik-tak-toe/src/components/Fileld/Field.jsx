import { useDispatch, useSelector } from 'react-redux';
import {
	setCurrentPlayer,
	setField,
	setIsDraw,
	setIsGameEnded,
} from '../../actions/actions.js';
import FieldLayout from './FieldLayout';

export const FieldContainer = () => {
	const dispatch = useDispatch();

	// Выберите только необходимые части состояния
	const field = useSelector((state) => state.field);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);

	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;

		dispatch(setField(newField));

		if (checkWin(newField, currentPlayer)) {
			dispatch(setIsGameEnded(true));
			return;
		}

		if (newField.every((cell) => cell !== '')) {
			dispatch(setIsDraw(true));
			return;
		}

		dispatch(setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X'));
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

	return <FieldLayout field={field} onCellClick={handleCellClick} />;
};
