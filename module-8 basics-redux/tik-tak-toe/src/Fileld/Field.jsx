import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';
import './gameboard.module.css';

export const FieldContainer = ({
	field,
	currentPlayer,
	setField,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	isGameEnded,
}) => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];
	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return; // Игнорируем клик если клетка занята или игра окончена

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		// Проверяем условия победы
		if (checkWin(newField, currentPlayer)) {
			setIsGameEnded(true); // Игра завершена
			return;
		}

		// Проверяем на ничью
		if (newField.every((cell) => cell !== '')) {
			setIsDraw(true); // Ничья
			return;
		}

		// Меняем игрока
		setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
	};

	const checkWin = (field, player) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === player),
		);
	};

	return <FieldLayout field={field} onCellClick={handleCellClick} />;
};

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
	setField: PropTypes.func.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
};
