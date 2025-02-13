import PropTypes from 'prop-types';
import './information.module.css'; // CSS-модуль для стилей
import InformationLayout from './InformationLayout';

export const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
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

InformationContainer.propTypes = {
	currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};
