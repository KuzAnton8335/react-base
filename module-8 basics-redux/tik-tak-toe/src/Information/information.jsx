import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import store from '../store';
import './information.module.css'; // CSS-модуль для стилей
import InformationLayout from './InformationLayout';

export const InformationContainer = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	const { currentPlayer, isGameEnded, isDraw } = state;
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
